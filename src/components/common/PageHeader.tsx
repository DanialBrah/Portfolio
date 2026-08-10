import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { fadeInUp, staggerContainer } from '@/lib/motion-variants'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
}

/** Shared hero band at the top of every inner page. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-surface/40 py-16 sm:py-20 dark:bg-bg-soft/50">
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-semibold tracking-[0.18em] text-accent uppercase"
          >
            {eyebrow}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold sm:text-5xl">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-5 text-lg leading-relaxed text-muted">
            {description}
          </motion.p>
        </motion.div>
      </Container>
    </div>
  )
}
