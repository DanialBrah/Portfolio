import { motion } from 'motion/react'
import { ArrowLeft, Compass } from 'lucide-react'
import { PageTransition } from '@/components/motion/PageTransition'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { staggerContainer, fadeInUp } from '@/lib/motion-variants'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <title>Page not found — Mohd Danial Hakim</title>
      <meta name="robots" content="noindex" />

      <Container className="grid min-h-[70vh] place-items-center py-20 text-center">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="mx-auto mb-8 w-fit">
            <motion.span
              animate={{ rotate: [0, 12, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="grid h-20 w-20 place-items-center rounded-3xl bg-accent/12 text-accent"
            >
              <Compass size={38} strokeWidth={1.6} />
            </motion.span>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="font-display text-6xl font-extrabold text-gradient sm:text-8xl"
          >
            404
          </motion.p>

          <motion.h1 variants={fadeInUp} className="mt-4 text-2xl font-bold sm:text-3xl">
            This page took a wrong turn
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-md leading-relaxed text-muted"
          >
            The page you are looking for does not exist or has moved. Let&rsquo;s get you back to
            somewhere useful.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <ButtonLink to="/" size="lg">
              <ArrowLeft size={18} />
              Back home
            </ButtonLink>
            <ButtonLink to="/projects" variant="secondary" size="lg">
              Browse projects
            </ButtonLink>
          </motion.div>
        </motion.div>
      </Container>
    </PageTransition>
  )
}
