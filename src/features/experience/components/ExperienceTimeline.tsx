import { motion } from 'motion/react'
import { Building2, CalendarDays, MapPin } from 'lucide-react'
import type { Experience } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp } from '@/lib/motion-variants'

function TimelineEntry({ item, index }: { item: Experience; index: number }) {
  return (
    <motion.li
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-70px' }}
      transition={{ delay: Math.min(index * 0.08, 0.3) }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Node on the rail */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 grid h-8 w-8 place-items-center rounded-full border-2 border-accent/30 bg-bg sm:left-2"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
      </span>

      <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold sm:text-xl">{item.role}</h3>
            <p className="mt-1.5 flex items-center gap-2 text-sm font-medium text-accent">
              <Building2 size={15} className="shrink-0" />
              {item.organization}
            </p>
          </div>
          <Badge variant="accent">{item.badge}</Badge>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-subtle">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} />
            {item.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {item.location}
          </span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
              />
              {highlight}
            </li>
          ))}
        </ul>

        {item.tech && item.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface/70 px-2.5 py-1 text-xs text-muted dark:bg-bg-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  )
}

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-8">
      {/* Vertical rail, fading out at the bottom */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-accent/40 via-border to-transparent sm:left-6"
      />
      {items.map((item, index) => (
        <TimelineEntry key={item.id} item={item} index={index} />
      ))}
    </ol>
  )
}
