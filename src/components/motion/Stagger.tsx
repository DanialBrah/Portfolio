import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeInUp, revealViewport, staggerContainer } from '@/lib/motion-variants'
import { cn } from '@/lib/cn'

interface StaggerProps {
  children: ReactNode
  className?: string
}

/** Parent that cascades its children's reveal animations. */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </motion.div>
  )
}

/** Direct child of `<Stagger>`; inherits the cascade timing from the parent. */
export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div className={cn(className)} variants={fadeInUp}>
      {children}
    </motion.div>
  )
}
