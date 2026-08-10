import { skillCategories, totalSkillCount } from '@/data/skills'
import { PageTransition } from '@/components/motion/PageTransition'
import { PageHeader } from '@/components/common/PageHeader'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/motion/Reveal'
import { SkillCategorySection } from '@/features/skills/components/SkillCategorySection'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'

export default function SkillsPage() {
  return (
    <PageTransition>
      <title>Skills — Mohd Danial Hakim</title>
      <meta
        name="description"
        content="Technical skills across languages, backend, frontend, databases, DevOps, testing and design practices — including Java, Spring Boot, React, Laravel, Flutter and Docker."
      />

      <PageHeader
        eyebrow="Capabilities"
        title="Skills"
        description="The technologies I have picked up building the projects on this site — rated honestly, from daily drivers to the ones I am still growing into."
      />

      {/* Summary strip */}
      <div className="border-b border-border bg-surface/40 py-10 dark:bg-bg-soft/60">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          <Reveal className="text-center">
            <p className="font-display text-3xl font-bold">
              <AnimatedCounter value={totalSkillCount} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-muted">Technologies</p>
          </Reveal>
          <Reveal delay={0.05} className="text-center">
            <p className="font-display text-3xl font-bold">
              <AnimatedCounter value={skillCategories.length} />
            </p>
            <p className="mt-1 text-sm text-muted">Disciplines</p>
          </Reveal>
          <Reveal delay={0.1} className="text-center">
            <p className="font-display text-3xl font-bold">
              <AnimatedCounter value={9} />
            </p>
            <p className="mt-1 text-sm text-muted">Languages</p>
          </Reveal>
          <Reveal delay={0.15} className="text-center">
            <p className="font-display text-3xl font-bold">
              <AnimatedCounter value={4} />
            </p>
            <p className="mt-1 text-sm text-muted">Years coding</p>
          </Reveal>
        </div>
      </div>

      {/* Alternating tinted sections keep the seven categories visually separated. */}
      {skillCategories.map((category, index) => (
        <Section key={category.id} muted={index % 2 === 1}>
          <SkillCategorySection category={category} />
        </Section>
      ))}
    </PageTransition>
  )
}
