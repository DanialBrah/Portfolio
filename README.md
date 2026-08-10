# Portfolio — Mohd Danial Hakim

Personal portfolio site built with React 19, TypeScript, Vite, Tailwind CSS v4 and Motion.

**Brand palette:** `#C2185B` (accent) and `#E0F2FE` (surface), with a full light/dark theme.

---

## Getting started

```bash
npm install
cp .env.example .env    # optional — see "Contact form" below
npm run dev             # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Typecheck, build to `dist`, then verify the CSP hash |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm run verify:csp` | Check inline scripts match the CSP in `vercel.json` |
| `npm run audit:ci` | Fail on high/critical dependency advisories |

---

## Things you need to add

The site builds and runs without these — each one degrades gracefully — but it
looks finished once they are in place.

| What | Where | Without it |
| --- | --- | --- |
| Profile photo (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`) | `src/assets/images/profile.jpg` | An `MDH` monogram renders instead |
| Resume PDF | `public/resume/MohdDanialHakim-CV.pdf` | The "Download CV" buttons 404 |
| Web3Forms key | `.env` | The contact form falls back to `mailto:` |

---

## Project structure

```text
src/
├── app/              Router, providers, app shell
├── assets/           Images (profile photo, project screenshots)
├── components/
│   ├── ui/           Primitives: Button, Card, Badge, Section, ProgressBar…
│   ├── layout/       Navbar, Footer, RootLayout, ThemeToggle, ScrollProgress
│   ├── motion/       Reveal, Stagger, PageTransition, AnimatedCounter, TypingText
│   └── common/       SkillIcon, ProjectCard, PageHeader, SocialLinks…
├── config/site.ts    Name, contact details, socials, nav items
├── data/             ← All site content lives here
├── features/         Page-specific sections, grouped by page
├── hooks/            useTheme, useMediaQuery, usePrefersReducedMotion…
├── lib/              cn(), motion variants, brand icons, Zod schemas
├── pages/            One file per route
├── styles/index.css  Tailwind import, theme tokens, base styles
└── types/            Shared content types
```

**The rule that keeps this maintainable:** components never hardcode content.
Everything you would want to change — copy, dates, percentages, links — lives in
`src/data/` and `src/config/site.ts`.

---

## Editing content

### Add a project

Append an object to `projects` in [`src/data/projects.ts`](src/data/projects.ts). The
grid, the filters, the featured row on the home page and the `/projects/:slug`
detail route all read from that one array.

```ts
{
  slug: 'my-project',          // must be unique — becomes the URL
  title: 'My Project',
  tagline: 'One-line summary shown on the card.',
  description: ['Paragraph one.', 'Paragraph two.'],
  categories: ['web', 'fullstack'],   // drives the filter chips
  type: 'Web Application',
  period: 'Jan 2026',
  status: 'completed',
  featured: false,             // true → also shows on the home page
  role: 'Full-stack developer',
  highlights: ['What you built and why it mattered.'],
  stack: [{ label: 'Backend', items: ['Node.js'] }],
  primaryTech: ['Node.js'],    // logo row on the card — keep to ~5
  links: [{ label: 'Source', href: 'https://…', kind: 'github' }],
}
```

### Add or retune a skill

Edit [`src/data/skills.ts`](src/data/skills.ts). `level` is a 0–100 self-assessment
that drives both the bar width and the count-up label.

```ts
{ name: 'Kotlin', level: 70, icon: 'kotlin' }
```

`icon` is a [simple-icons](https://simpleicons.org) slug, lowercased. If a brand
has no simple-icons entry, use `fallbackIcon` with a
[lucide](https://lucide.dev) icon name instead:

```ts
{ name: 'Some Tool', level: 60, fallbackIcon: 'Wrench' }
```

A few brands (AWS, LinkedIn, Playwright) were removed from simple-icons over
trademark policy — those have hand-maintained paths in
[`src/lib/brand-icons.ts`](src/lib/brand-icons.ts).

### Add an experience or leadership role

Append to `experiences` in [`src/data/experience.ts`](src/data/experience.ts) and set
`kind` to `'work'` or `'leadership'`. The Experience page splits the timeline on
that field automatically.

### Other content

| Change                        | File                          |
| ----------------------------- | ----------------------------- |
| Name, email, phone, socials   | `src/config/site.ts`          |
| Nav links                     | `src/config/site.ts`          |
| Bio, hero stats               | `src/data/profile.ts`         |
| Education                     | `src/data/education.ts`       |
| Activities, certs, awards     | `src/data/certifications.ts`  |

---

## Theming

Colours are defined once in [`src/styles/index.css`](src/styles/index.css) as CSS
variables, then exposed to Tailwind through `@theme`. Components use semantic
utilities (`bg-bg`, `text-fg`, `text-accent`, `border-border`) and never branch
on the active theme.

To rebrand, change the `--color-brand-*` ramp and the `--tone-*` values under
`:root` and `.dark`.

> **One thing to keep in mind:** the accent lightens from `#C2185B` to `#F06292`
> in dark mode on purpose. `#C2185B` on the dark background is ~2.9:1, which
> fails WCAG AA; `#F06292` clears 7:1. If you change the brand colour, check the
> dark variant's contrast too.

Dark mode is class-based (`.dark` on `<html>`), driven by `ThemeProvider` with a
`localStorage` → `prefers-color-scheme` fallback. An inline script in
`index.html` applies the stored theme *before first paint* so dark-mode visitors
never see a white flash — if you move that script into React, the flash comes
back.

---

## Animations

Shared variants live in [`src/lib/motion-variants.ts`](src/lib/motion-variants.ts).

`RootLayout` wraps the app in `<MotionConfig reducedMotion="user">`, so when a
visitor has "reduce motion" enabled at OS level, Motion drops transform and
layout animations globally — no per-component branching needed. `AnimatedCounter`
and `TypingText` additionally check the preference themselves, since they animate
text content rather than CSS properties.

---

## Contact form

The form posts to [Web3Forms](https://web3forms.com), which needs no backend.

1. Get a free access key (they email it to you instantly).
2. Add it to `.env`:

   ```dotenv
   VITE_WEB3FORMS_KEY=your-key-here
   ```

3. Add the same variable in your Vercel project settings for production.

Without a key the form validates as normal and then opens the visitor's mail
client with the message pre-filled, so a fresh clone is never broken. A honeypot
field drops bot submissions client-side.

---

## Deployment

Configured for **Vercel** out of the box: `base: '/'`, `BrowserRouter`, and a
`vercel.json` rewrite so deep links like `/skills` survive a hard refresh.

```bash
npm i -g vercel
vercel
```

Remember to set `VITE_WEB3FORMS_KEY` in the Vercel dashboard.

### Deploying elsewhere

**Netlify** — delete `vercel.json` and add `public/_redirects`:

```text
/*  /index.html  200
```

**GitHub Pages** — Pages cannot do SPA rewrites, so two changes are needed:

1. `vite.config.ts` → `base: '/Portfolio/'`
2. `src/app/router.tsx` → swap `createBrowserRouter` for `createHashRouter`
   (URLs become `/#/skills`)

---

## Security

This is a static site with no backend, no auth and no database, so the attack
surface is small. What follows is hardening and privacy, not patches for known
holes.

### ⚠ Your Web3Forms key is public — this is the one thing to act on

**Any `VITE_*` variable is compiled into the JavaScript bundle.** `.env` keeps
the key out of git, *not* out of the browser — anyone can read it in DevTools in
about ten seconds. That is how Web3Forms is designed to work, but it means the
key can be reused from any other origin to send mail to your inbox.

**Do this after your first deploy:** open the Web3Forms dashboard → your form →
**Allowed Domains**, and add your production domain. That is the control that
actually stops the key being used from somewhere else. The 30-second cooldown in
`ContactForm.tsx` only slows down abuse originating from this page.

Also in place: a honeypot field, an in-flight guard against double-submits, and
length caps enforced by Zod.

If spam ever gets through, add Cloudflare Turnstile — it is free and usually
invisible. You would need to allow `https://challenges.cloudflare.com` in
`script-src` and `frame-src` in the CSP.

### Security headers

Set in [`vercel.json`](vercel.json) and applied to every response:

| Header | Purpose |
| --- | --- |
| `Content-Security-Policy` | Restricts where scripts, styles, fonts and network calls may come from |
| `X-Frame-Options: DENY` + `frame-ancestors 'none'` | Blocks clickjacking via iframes |
| `X-Content-Type-Options: nosniff` | Stops MIME-type sniffing |
| `Referrer-Policy` | Limits what referrer data leaks to other sites |
| `Permissions-Policy` | Denies camera, microphone, geolocation and similar APIs |
| `Strict-Transport-Security` | Forces HTTPS for two years |
| `Cross-Origin-Opener-Policy` | Isolates the browsing context |

Two deliberate choices worth knowing:

- **`style-src` includes `'unsafe-inline'`.** Motion animates by writing inline
  `style` attributes, so a strict style policy would freeze every animation on
  the site. Style injection is far less dangerous than script injection, and
  `script-src` stays strict — which is the directive that actually matters.
- **`Strict-Transport-Security` omits `preload`.** Preloading is irreversible
  for months and cannot be applied to a `*.vercel.app` subdomain anyway. Once
  you move to a custom domain you own, add `; preload` and submit it at
  [hstspreload.org](https://hstspreload.org).

#### The CSP pins an inline script by hash — do not edit it blindly

`index.html` contains a small inline script that applies the saved theme before
first paint (without it, dark-mode visitors get a white flash). CSP allows it via
a SHA-256 hash rather than `'unsafe-inline'`.

**Changing that script by even one character changes its hash, and the browser
will then silently block it — no build error, no console warning, just the flash
coming back.**

`npm run build` runs [`scripts/check-csp-hash.mjs`](scripts/check-csp-hash.mjs),
which fails the build and prints the replacement hash to paste into
`vercel.json`. This has been verified to catch drift.

### Fonts are self-hosted

Inter and Sora are served from `src/assets/fonts/` rather than Google's CDN.
Loading them from `fonts.googleapis.com` sends every visitor's IP address to
Google, which is a **GDPR exposure** that has drawn fines in the EU. Self-hosting
also removes two DNS lookups and a render-blocking request.

Both are variable fonts, so one 48 KB and one 25 KB file cover every weight.

> If you add a font weight or family, keep it self-hosted. Adding a Google Fonts
> `<link>` back will be blocked by `font-src 'self'` and the text will silently
> fall back to a system font.

### Dependencies

- [`dependabot.yml`](.github/dependabot.yml) — weekly npm updates, grouped;
  security advisories still arrive immediately and individually.
- [`ci.yml`](.github/workflows/ci.yml) — lint, typecheck, build and
  `npm audit --audit-level=high` on every push and PR. Uses `npm ci` so CI can
  never resolve a different dependency tree than the reviewed lockfile.

**Known advisory, assessed as not applicable:** `npm audit` reports two high
findings for `react-router` (RSC Mode CSRF Bypass). This site is a client-side
SPA with no RSC mode and no server actions, so the vulnerable code path is never
reached. `7.18.2` is the latest release; there is nothing to upgrade to.
Re-assess if you ever adopt React Router's framework mode.

### Preview deployments

Vercel preview URLs are publicly reachable by anyone with the link. To close
that off, enable **Vercel → Project → Settings → Deployment Protection**, which
puts previews behind authentication while leaving production open.

### Contact details are intentionally public

Your email and phone number are in plain text on the site. That is a deliberate
trade-off — one-click contact for recruiters is the point of a portfolio — at the
cost of some harvester spam. Obfuscating them would break `mailto:`/`tel:` links
and screen readers while barely inconveniencing a real scraper.

---

## Accessibility

- Semantic landmarks and a skip-to-content link
- Keyboard-navigable nav, filters and forms with visible focus rings
- Progress bars expose `role="progressbar"` with `aria-valuenow`
- `prefers-reduced-motion` respected in both CSS and Motion
- Colour contrast meets WCAG AA in both themes

---

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · React Router 7 ·
React Hook Form · Zod · lucide-react · simple-icons
