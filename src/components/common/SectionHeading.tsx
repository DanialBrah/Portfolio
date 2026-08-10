import { Reveal } from '@/components/motion/Reveal'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
