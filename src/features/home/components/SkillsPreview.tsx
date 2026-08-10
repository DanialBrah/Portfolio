import { ArrowRight } from 'lucide-react'
import { featuredSkills, totalSkillCount } from '@/data/skills'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { SkillIcon } from '@/components/common/SkillIcon'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

export function SkillsPreview() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="What I work with"
        title="Core Strengths"
        description={`The technologies I reach for most often, drawn from ${totalSkillCount} skills across seven disciplines.`}
      />

      <Stagger className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {featuredSkills.map((skill, index) => (
          <StaggerItem key={skill.name}>
            <div className="mb-2 flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card">
                <SkillIcon
                  icon={skill.icon}
                  fallbackIcon={skill.fallbackIcon}
                  label={skill.name}
                  className="h-[18px] w-[18px]"
                />
              </span>
              <span className="font-medium">{skill.name}</span>
              <span className="ml-auto text-sm font-semibold text-accent">
                <AnimatedCounter value={skill.level} suffix="%" />
              </span>
            </div>
            <ProgressBar value={skill.level} label={skill.name} delay={index * 0.05} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12 text-center">
        <ButtonLink to="/skills" variant="secondary" size="lg">
          Explore all skills
          <ArrowRight size={18} />
        </ButtonLink>
      </Reveal>
    </Section>
  )
}
