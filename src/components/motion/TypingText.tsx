import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface TypingTextProps {
  phrases: readonly string[]
  className?: string
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

/**
 * Types each phrase out, holds, deletes it, then moves to the next.
 *
 * With reduced motion requested it renders the first phrase statically — the
 * heading still reads correctly, it just does not animate.
 */
export function TypingText({
  phrases,
  className,
  typingSpeedMs = 90,
  deletingSpeedMs = 45,
  pauseMs = 1800,
}: TypingTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion || phrases.length === 0) return

    const current = phrases[phraseIndex] ?? ''

    // Finished typing — hold the full phrase, then start deleting.
    if (!isDeleting && text === current) {
      const timer = setTimeout(() => setIsDeleting(true), pauseMs)
      return () => clearTimeout(timer)
    }

    // Fully deleted — advance to the next phrase. Scheduled rather than run
    // synchronously so every state update happens from a timer callback.
    if (isDeleting && text === '') {
      const timer = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
      }, deletingSpeedMs)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(
      () => {
        setText((previous) =>
          isDeleting ? current.slice(0, previous.length - 1) : current.slice(0, previous.length + 1),
        )
      },
      isDeleting ? deletingSpeedMs : typingSpeedMs,
    )

    return () => clearTimeout(timer)
  }, [
    text,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeedMs,
    deletingSpeedMs,
    pauseMs,
    prefersReducedMotion,
  ])

  if (prefersReducedMotion) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={cn('inline-flex items-baseline', className)}>
      {/* aria-live off so screen readers do not announce every keystroke. */}
      <span aria-live="off">{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-[3px] translate-y-[0.1em] animate-pulse rounded-full bg-accent"
      />
    </span>
  )
}
