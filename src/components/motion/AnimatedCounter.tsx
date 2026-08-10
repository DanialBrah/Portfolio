import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface AnimatedCounterProps {
  value: number
  decimals?: number
  suffix?: string
  durationMs?: number
  className?: string
}

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * Driven by rAF rather than Motion's `animate` because the output is text: it
 * needs re-formatting to a fixed number of decimals on every frame.
 */
export function AnimatedCounter({
  value,
  decimals = 0,
  suffix = '',
  durationMs = 1400,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = usePrefersReducedMotion()
  const [progress, setProgress] = useState(0)

  const shouldAnimate = isInView && !prefersReducedMotion

  useEffect(() => {
    if (!shouldAnimate) return

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / durationMs, 1)
      // easeOutExpo — fast at first, settles gently on the final number.
      setProgress(elapsed === 1 ? 1 : 1 - Math.pow(2, -10 * elapsed))

      if (elapsed < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shouldAnimate, durationMs])

  /*
    Derived during render rather than stored: with reduced motion, or before
    the counter scrolls into view, the value resolves without an extra state
    write. Off-screen it reads 0, which the reveal animation hides anyway.
  */
  const displayed = prefersReducedMotion && isInView ? value : value * progress

  return (
    <span ref={ref} className={className}>
      {displayed.toFixed(decimals)}
      {suffix}
    </span>
  )
}
