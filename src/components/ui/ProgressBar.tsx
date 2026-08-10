import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { EASE } from '@/lib/motion-variants'

interface ProgressBarProps {
  /** 0–100. */
  value: number
  label: string
  delay?: number
  className?: string
}

/**
 * Animated proficiency bar. Fills from 0 to `value` when scrolled into view.
 *
 * The track carries the ARIA progressbar role so assistive tech reads the
 * level directly rather than inferring it from the visual width.
 */
export function ProgressBar({ value, label, delay = 0, className }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-label={`${label} proficiency`}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-border/60', className)}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-accent to-surface-400"
        initial={{ width: '0%' }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      />
    </div>
  )
}
