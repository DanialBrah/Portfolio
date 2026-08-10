/**
 * Shared content types. Everything rendered on the site is described here and
 * populated in `src/data/*` — components never hardcode copy.
 */

export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'fullstack'

export type ProjectStatus = 'completed' | 'ongoing'

export interface ProjectLink {
  label: string
  href: string
  kind: 'github' | 'demo' | 'docs'
}

export interface TechStackGroup {
  /** e.g. "Backend", "Mobile", "DevOps" */
  label: string
  items: string[]
}

export interface Project {
  /** URL segment for /projects/:slug — must be unique and kebab-case. */
  slug: string
  title: string
  tagline: string
  /** One or two paragraphs shown on the detail page. */
  description: string[]
  categories: ProjectCategory[]
  /** Shown as the card's accent chip. */
  type: string
  period: string
  status: ProjectStatus
  featured: boolean
  /** Role played on the project, shown on the detail page. */
  role: string
  highlights: string[]
  stack: TechStackGroup[]
  /** Short list surfaced on the card; keep to ~5 for layout reasons. */
  primaryTech: string[]
  links: ProjectLink[]
  /** True when the source is private and cannot be linked. */
  isPrivate?: boolean
}

export type SkillCategoryId =
  | 'languages'
  | 'backend'
  | 'frontend'
  | 'databases'
  | 'devops'
  | 'testing'
  | 'practices'

export interface Skill {
  name: string
  /** 0–100. Drives the progress bar width and the count-up label. */
  level: number
  /**
   * simple-icons slug (e.g. "react" → siReact). Omit when the technology has
   * no simple-icons entry; `fallbackIcon` is used instead.
   */
  icon?: string
  /** lucide-react icon name, used when `icon` is absent or unresolved. */
  fallbackIcon?: string
  /** Overrides the simple-icons brand colour when it reads poorly on dark. */
  colorOverride?: string
}

export interface SkillCategory {
  id: SkillCategoryId
  label: string
  description: string
  /** lucide-react icon name for the category heading. */
  icon: string
  skills: Skill[]
}

export type ExperienceKind = 'work' | 'leadership'

export interface Experience {
  id: string
  role: string
  organization: string
  location: string
  period: string
  kind: ExperienceKind
  /** Shown as a chip, e.g. "Internship", "Committee". */
  badge: string
  highlights: string[]
  tech?: string[]
}

export interface Education {
  id: string
  institution: string
  qualification: string
  location: string
  period: string
  result?: string
  note?: string
}

export interface Activity {
  id: string
  title: string
  organization: string
  period: string
  description: string
  icon: string
}

export interface Certification {
  id: string
  title: string
  issuer?: string
  period?: string
  description?: string
}

export interface Award {
  id: string
  title: string
  detail?: string
}

export interface SocialLink {
  label: string
  href: string
  /** simple-icons slug, resolved by SkillIcon/SocialLinks. */
  icon: string
}

export interface NavItem {
  label: string
  to: string
}

export interface Stat {
  label: string
  value: number
  /** Rendered after the counted value, e.g. "+" or "". */
  suffix?: string
  /** Decimal places for the count-up, e.g. 1 for a 4.0 CGPA. */
  decimals?: number
  icon: string
}
