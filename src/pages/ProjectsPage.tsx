import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { FolderSearch } from 'lucide-react'
import { projectFilters, projects } from '@/data/projects'
import { PageTransition } from '@/components/motion/PageTransition'
import { PageHeader } from '@/components/common/PageHeader'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/common/ProjectCard'
import {
  ProjectFilters,
  type FilterId,
} from '@/features/projects/components/ProjectFilters'

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')

  // Counts are derived once — they never change, only the active filter does.
  const counts = useMemo(() => {
    return projectFilters.reduce<Record<string, number>>((accumulator, filter) => {
      const { id } = filter
      accumulator[id] =
        id === 'all'
          ? projects.length
          : projects.filter((project) => project.categories.includes(id)).length
      return accumulator
    }, {})
  }, [])

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <PageTransition>
      <title>Projects — Mohd Danial Hakim</title>
      <meta
        name="description"
        content="Selected projects including UniSphere, First Aid+, MakanMate, TVPSS, WellCheck, TaskMaster and JobBridge."
      />

      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Systems I have designed and built across web, mobile and backend — each one an exercise in taking something from an idea to working software."
      />

      <Section>
        <ProjectFilters active={activeFilter} onChange={setActiveFilter} counts={counts} />

        <LayoutGroup>
          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {visibleProjects.length === 0 && (
          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <FolderSearch size={40} className="text-subtle" />
            <p className="text-muted">No projects in this category yet.</p>
          </div>
        )}
      </Section>
    </PageTransition>
  )
}
