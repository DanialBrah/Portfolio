import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode
  className?: string
  /** Adds hover affordances for cards that link somewhere. */
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-sm',
        interactive &&
          'transition-colors duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5',
        className,
      )}
    >
      {children}
    </div>
  )
}
