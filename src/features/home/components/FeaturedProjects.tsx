import { ArrowRight } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ProjectCard } from '@/components/common/ProjectCard'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

export function FeaturedProjects() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        description="A closer look at the systems I have designed and built — from a campus-scale platform to emergency response tooling."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <ButtonLink to="/projects" variant="secondary" size="lg">
          See all projects
          <ArrowRight size={18} />
        </ButtonLink>
      </Reveal>
    </Section>
  )
}
