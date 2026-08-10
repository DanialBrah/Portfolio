import { useEffect } from 'react'

/**
 * Freezes background scrolling while an overlay (the mobile nav drawer) is
 * open. Compensates for the removed scrollbar so the page does not shift.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth

    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`
    }

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [locked])
}
