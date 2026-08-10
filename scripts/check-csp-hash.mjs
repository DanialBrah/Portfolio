#!/usr/bin/env node
/**
 * Verifies that every inline <script> in the built index.html is covered by a
 * matching 'sha256-…' source in the Content-Security-Policy in vercel.json.
 *
 * Why this exists: the CSP pins the no-flash theme script in index.html by
 * hash. Editing that script by even one character changes the hash, and the
 * browser then silently blocks it — dark-mode visitors get a white flash on
 * every load, and nothing in the build output would tell you. This turns that
 * silent breakage into a failed build.
 *
 * Run automatically after `npm run build`.
 */
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const html = readFileSync(resolve(root, 'dist/index.html'), 'utf8')
const vercelConfig = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'))

const csp = vercelConfig.headers
  ?.flatMap((entry) => entry.headers ?? [])
  .find((header) => header.key === 'Content-Security-Policy')?.value

if (!csp) {
  console.error('✗ No Content-Security-Policy header found in vercel.json.')
  process.exit(1)
}

// Inline scripts only — anything with a src attribute is covered by 'self'.
const inlineScripts = [...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)]

let failed = false

for (const [, body] of inlineScripts) {
  const hash = `sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}`

  if (csp.includes(hash)) {
    console.log(`✓ inline script covered by ${hash}`)
  } else {
    failed = true
    console.error(
      [
        '',
        '✗ An inline script in dist/index.html is NOT allowed by the CSP.',
        '',
        `  Expected this source in script-src:  '${hash}'`,
        '',
        '  Fix: replace the existing sha256-… value in the',
        '  Content-Security-Policy inside vercel.json with the hash above.',
        '',
        '  Script preview:',
        body
          .trim()
          .split('\n')
          .slice(0, 3)
          .map((line) => `    ${line}`)
          .join('\n'),
        '',
      ].join('\n'),
    )
  }
}

// A stale hash left behind after an inline script is removed is dead config,
// not a security hole — warn rather than fail.
const declaredHashes = [...csp.matchAll(/'(sha256-[A-Za-z0-9+/=]+)'/g)].map(([, h]) => h)
const actualHashes = inlineScripts.map(
  ([, body]) => `sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}`,
)

for (const declared of declaredHashes) {
  if (!actualHashes.includes(declared)) {
    console.warn(`! CSP declares '${declared}' but no inline script matches it — safe to remove.`)
  }
}

if (failed) process.exit(1)

console.log(`✓ CSP hash check passed (${inlineScripts.length} inline script(s)).`)
