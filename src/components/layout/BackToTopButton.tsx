import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'

/** Floating scroll-to-top control, revealed once the page is scrolled a screenful. */
export function BackToTopButton() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 600)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileHover={{ y: -3 }}
          className="fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-accent shadow-lg transition-colors hover:border-accent/50 sm:right-8 sm:bottom-8"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
