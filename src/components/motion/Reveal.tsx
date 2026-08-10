import type { ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'
import { fadeInUp, revealViewport } from '@/lib/motion-variants'
import { cn } from '@/lib/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds to wait before this element animates in. */
  delay?: number
  variants?: Variants
}

/**
 * Reveals its children once they scroll into view. Motion's `MotionConfig`
 * (set in RootLayout) collapses the transition when the visitor has asked for
 * reduced motion, so no per-component branching is needed here.
 */
export function Reveal({ children, className, delay = 0, variants = fadeInUp }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
