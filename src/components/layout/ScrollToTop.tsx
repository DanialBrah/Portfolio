import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll position on navigation.
 *
 * React Router preserves scroll between routes by default, which leaves you
 * halfway down a freshly opened page. Uses `instant` so it does not fight the
 * `scroll-behavior: smooth` set globally in CSS.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
