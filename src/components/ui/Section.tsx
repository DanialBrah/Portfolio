import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  /** Applies the tinted surface background used to alternate sections. */
  muted?: boolean
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  muted = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        muted && 'bg-surface/45 dark:bg-bg-soft/60',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
