import { createElement } from 'react'
import type { LucideIcon, LucideProps } from 'lucide-react'
import { getUiIcon } from '@/lib/ui-icons'

interface UiIconProps extends Omit<LucideProps, 'ref'> {
  /** Icon name as written in `src/data/*`, e.g. "GraduationCap". */
  name?: string
  fallback?: LucideIcon
}

/**
 * Renders a lucide icon looked up by name from the registry.
 *
 * The lookup returns a stable module-level reference, but assigning it to a
 * capitalised variable and rendering it as JSX trips
 * `react-hooks/static-components`. Going through `createElement` here keeps the
 * dynamic lookup in one audited place instead of at every call site.
 */
export function UiIcon({ name, fallback, ...props }: UiIconProps) {
  return createElement(getUiIcon(name, fallback), props)
}
