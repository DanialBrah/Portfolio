import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'motion/react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollProgress } from './ScrollProgress'
import { ScrollToTop } from './ScrollToTop'
import { BackToTopButton } from './BackToTopButton'
import { RouteFallback } from './RouteFallback'

export function RootLayout() {
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    /*
      `reducedMotion="user"` makes Motion drop transform/layout animations
      globally when the OS asks for it, so individual components do not each
      need to branch. Opacity fades are retained, which keeps content visible.
    */
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <ScrollToTop />

      <a
        href="#main-content"
        className="sr-only rounded-full bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70]"
      >
        Skip to main content
      </a>

      <Navbar />

      {/* pt-16 clears the fixed header. */}
      <div className="pt-16">
        <AnimatePresence mode="wait" initial={false}>
          {/*
            Keying on pathname is what drives the exit animation. Suspense sits
            inside so a lazy chunk resolving does not unmount the whole tree.
          */}
          <Suspense key={prefersReducedMotion ? 'static' : location.pathname} fallback={<RouteFallback />}>
            <Outlet key={location.pathname} />
          </Suspense>
        </AnimatePresence>
      </div>

      <Footer />
      <BackToTopButton />
    </MotionConfig>
  )
}
