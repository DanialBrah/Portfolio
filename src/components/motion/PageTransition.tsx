import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { pageTransition } from '@/lib/motion-variants'

/** Wraps each route's content so navigation fades rather than snapping. */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      id="main-content"
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.main>
  )
}
