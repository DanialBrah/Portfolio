import { Code } from 'lucide-react'
import { getBrandIcon, isDarkColor } from '@/lib/brand-icons'
import { cn } from '@/lib/cn'
import { UiIcon } from './UiIcon'

interface SkillIconProps {
  /** simple-icons slug, e.g. "react". */
  icon?: string
  /** lucide icon name used when `icon` is missing or unresolvable. */
  fallbackIcon?: string
  label: string
  className?: string
  /** Render in the current text colour instead of the brand colour. */
  monochrome?: boolean
}

/**
 * Draws a technology logo.
 *
 * Prefers the official brand mark from simple-icons, falls back to a named
 * lucide icon, and finally to a neutral placeholder — so a typo in the data
 * file degrades to a visible generic icon rather than an empty box.
 */
export function SkillIcon({
  icon,
  fallbackIcon,
  label,
  className,
  monochrome = false,
}: SkillIconProps) {
  const brand = getBrandIcon(icon)

  if (brand) {
    // Several brands ship a pure-black mark (OpenJDK, GitHub, Socket.IO). Those
    // vanish against the dark theme, so they inherit the foreground colour
    // there instead of being hardcoded per entry in the data files.
    const useCurrentColor = monochrome || isDarkColor(brand.hex)

    return (
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 24 24"
        className={cn('shrink-0', useCurrentColor && 'text-fg', className)}
        fill={useCurrentColor ? 'currentColor' : `#${brand.hex}`}
      >
        <path d={brand.path} />
      </svg>
    )
  }

  return (
    <UiIcon
      name={fallbackIcon}
      fallback={Code}
      aria-label={label}
      role="img"
      className={cn('shrink-0 text-accent', className)}
      strokeWidth={1.75}
    />
  )
}
