import type { SimpleIcon } from 'simple-icons'
import {
  siApachemaven,
  siCplusplus,
  siCss,
  siDart,
  siDocker,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siGmail,
  siGraphql,
  siHibernate,
  siHtml5,
  siJavascript,
  siJenkins,
  siJira,
  siJsonwebtokens,
  siJunit5,
  siLaravel,
  siLeaflet,
  siLiquibase,
  siMongodb,
  siMui,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siReact,
  siReactquery,
  siRedis,
  siSocketdotio,
  siSonarqubeserver,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
  siVuedotjs,
} from 'simple-icons'

/**
 * Resolves a technology name to a monochrome SVG path + brand colour.
 *
 * Icons are imported by name rather than via `import * as simpleIcons`. The
 * namespace form pulls all ~3,300 icons into the bundle (it defeats
 * tree-shaking) and cost roughly 6 MB before this was split out — so any new
 * logo must be added to the import list and the registry below.
 */

export interface BrandIcon {
  title: string
  path: string
  hex: string
}

/** Hand-maintained entries for brands `simple-icons` does not ship. */
const customIcons: Record<string, BrandIcon> = {
  linkedin: {
    title: 'LinkedIn',
    hex: '0A66C2',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  aws: {
    title: 'Amazon Web Services',
    hex: 'FF9900',
    path: 'M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.383-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.271 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.567.032-.862.104a6.38 6.38 0 00-.862.272 2.29 2.29 0 01-.28.104.487.487 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51a1.26 1.26 0 00.272-.51c.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.294.837.294zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.798a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.15 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z',
  },
  playwright: {
    title: 'Playwright',
    hex: '2EAD33',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7.02 8.29c1.02 0 1.86.4 2.42 1.02l-.83.75c-.38-.42-.93-.68-1.59-.68-1.2 0-2.05.88-2.05 2.12 0 1.25.85 2.12 2.05 2.12.66 0 1.21-.26 1.59-.68l.83.75c-.56.62-1.4 1.02-2.42 1.02-1.87 0-3.24-1.36-3.24-3.21 0-1.85 1.37-3.21 3.24-3.21zm9.96 0c1.87 0 3.24 1.36 3.24 3.21 0 1.85-1.37 3.21-3.24 3.21-1.02 0-1.86-.4-2.42-1.02l.83-.75c.38.42.93.68 1.59.68 1.2 0 2.05-.87 2.05-2.12 0-1.24-.85-2.12-2.05-2.12-.66 0-1.21.26-1.59.68l-.83-.75c.56-.62 1.4-1.02 2.42-1.02zm-4.98.13c.33 0 .6.27.6.6v5.16c0 .33-.27.6-.6.6s-.6-.27-.6-.6V9.02c0-.33.27-.6.6-.6z',
  },
}

/**
 * Every simple-icons logo the site can render, keyed by the lowercase slug
 * used in `src/data/*`. Add a technology here and to the import list above.
 */
const brandIcons: Record<string, SimpleIcon> = {
  apachemaven: siApachemaven,
  cplusplus: siCplusplus,
  css: siCss,
  dart: siDart,
  docker: siDocker,
  figma: siFigma,
  firebase: siFirebase,
  flutter: siFlutter,
  git: siGit,
  github: siGithub,
  githubactions: siGithubactions,
  gmail: siGmail,
  graphql: siGraphql,
  hibernate: siHibernate,
  html5: siHtml5,
  javascript: siJavascript,
  jenkins: siJenkins,
  jira: siJira,
  jsonwebtokens: siJsonwebtokens,
  junit5: siJunit5,
  laravel: siLaravel,
  leaflet: siLeaflet,
  liquibase: siLiquibase,
  mongodb: siMongodb,
  mui: siMui,
  mysql: siMysql,
  nodedotjs: siNodedotjs,
  openjdk: siOpenjdk,
  php: siPhp,
  react: siReact,
  reactquery: siReactquery,
  redis: siRedis,
  socketdotio: siSocketdotio,
  sonarqubeserver: siSonarqubeserver,
  spring: siSpring,
  springboot: siSpringboot,
  springsecurity: siSpringsecurity,
  swagger: siSwagger,
  tailwindcss: siTailwindcss,
  typescript: siTypescript,
  vite: siVite,
  vitest: siVitest,
  vuedotjs: siVuedotjs,
}

export function getBrandIcon(slug?: string): BrandIcon | null {
  if (!slug) return null

  const key = slug.toLowerCase()
  const custom = customIcons[key]
  if (custom) return custom

  const icon = brandIcons[key]
  if (!icon) return null

  return { title: icon.title, path: icon.path, hex: icon.hex }
}

/**
 * Perceived brightness (ITU-R BT.601) of a hex colour, 0–1.
 *
 * Used to keep near-black logos (OpenJDK, GitHub and Socket.IO all ship
 * `#000000`) from disappearing against the dark theme — the icon component
 * swaps them for the foreground colour rather than needing an override on each
 * entry in the data files.
 */
export function isDarkColor(hex: string): boolean {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return false

  const r = Number.parseInt(clean.slice(0, 2), 16)
  const g = Number.parseInt(clean.slice(2, 4), 16)
  const b = Number.parseInt(clean.slice(4, 6), 16)

  return (r * 299 + g * 587 + b * 114) / 1000 / 255 < 0.28
}
