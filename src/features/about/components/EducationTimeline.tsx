import { motion } from 'motion/react'
import { CalendarDays, GraduationCap, MapPin } from 'lucide-react'
import { education } from '@/data/education'
import { Badge } from '@/components/ui/Badge'
import { fadeInUp } from '@/lib/motion-variants'

export function EducationTimeline() {
  return (
    <ol className="relative space-y-6">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-accent/40 via-border to-transparent sm:left-6"
      />

      {education.map((item, index) => (
        <motion.li
          key={item.id}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          transition={{ delay: index * 0.08 }}
          className="relative pl-10 sm:pl-14"
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 grid h-8 w-8 place-items-center rounded-full border-2 border-accent/30 bg-bg text-accent sm:left-2"
          >
            <GraduationCap size={14} />
          </span>

          <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-display text-lg font-bold">{item.institution}</h3>
              {item.result && <Badge variant="accent">{item.result}</Badge>}
            </div>

            <p className="mt-1.5 text-sm font-medium text-accent">{item.qualification}</p>

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

            {item.note && <p className="mt-4 text-sm leading-relaxed text-muted">{item.note}</p>}
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
