import { motion } from 'motion/react'
import type { Skill } from '@/types'
import { SkillIcon } from '@/components/common/SkillIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import { fadeInUp } from '@/lib/motion-variants'

/**
 * One skill row: official logo, name, animated bar and a count-up percentage.
 */
export function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
      className="group"
    >
      <div className="mb-2.5 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/40 group-hover:shadow-md">
          <SkillIcon
            icon={skill.icon}
            fallbackIcon={skill.fallbackIcon}
            label={skill.name}
            className="h-5 w-5"
          />
        </span>

        <span className="font-medium">{skill.name}</span>

        <span className="ml-auto text-sm font-semibold text-accent tabular-nums">
          <AnimatedCounter value={skill.level} suffix="%" />
        </span>
      </div>

      <ProgressBar value={skill.level} label={skill.name} delay={Math.min(index * 0.05, 0.3)} />
    </motion.div>
  )
}
