import { Code } from 'lucide-react'
import type { SkillCategory } from '@/types'
import { Reveal } from '@/components/motion/Reveal'
import { UiIcon } from '@/components/common/UiIcon'
import { SkillBar } from './SkillBar'

export function SkillCategorySection({ category }: { category: SkillCategory }) {
  return (
    <div>
      <Reveal className="mb-8 flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/12 text-accent">
          <UiIcon name={category.icon} fallback={Code} size={22} strokeWidth={1.8} />
        </span>
        <div>
          <h2 className="font-display text-xl font-bold sm:text-2xl">{category.label}</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">{category.description}</p>
        </div>
      </Reveal>

      <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {category.skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}
