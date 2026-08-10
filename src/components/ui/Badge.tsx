import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'accent' | 'outline' | 'surface'

const variantStyles: Record<BadgeVariant, string> = {
  accent: 'bg-accent/12 text-accent border-accent/25',
  outline: 'border-border text-muted',
  surface: 'bg-surface/70 text-fg border-transparent dark:bg-bg-soft',
}

export function Badge({
  children,
  variant = 'accent',
  className,
}: {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
