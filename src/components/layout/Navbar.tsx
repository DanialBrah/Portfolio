import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navItems, siteConfig } from '@/config/site'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { cn } from '@/lib/cn'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 12))
  useLockBodyScroll(menuOpen)

  /*
    Close the drawer whenever the route changes, including on back/forward.
    Adjusted during render rather than in an effect — React re-renders
    immediately without painting the intermediate state, so the drawer never
    flashes open on the new page.
    https://react.dev/learn/you-might-not-need-an-effect
  */
  const [lastPathname, setLastPathname] = useState(pathname)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/80 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Main">
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm text-on-accent transition-transform duration-300 group-hover:scale-105">
              {siteConfig.initials}
            </span>
            <span className="hidden sm:inline">{siteConfig.shortName}</span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {({ isActive }) => (
                    <span
                      className={cn(
                        'relative block rounded-full px-4 py-2 text-sm font-medium transition-colors',
                        isActive ? 'text-accent' : 'text-muted hover:text-fg',
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-accent/12"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-colors hover:border-accent/50 hover:text-accent md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-bg/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="absolute inset-x-0 top-16 z-50 border-b border-border bg-bg px-5 pb-6 shadow-xl md:hidden"
            >
              <ul className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-accent/12 text-accent'
                            : 'text-muted hover:bg-surface/60 hover:text-fg dark:hover:bg-bg-soft',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
