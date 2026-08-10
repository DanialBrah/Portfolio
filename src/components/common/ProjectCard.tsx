import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Lock } from 'lucide-react'
import type { Project } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { SkillIcon } from '@/components/common/SkillIcon'
import { fadeInUp } from '@/lib/motion-variants'

/** Maps a display tech name to its simple-icons slug for the card's logo row. */
const techIconSlugs: Record<string, string> = {
  'Spring Boot': 'springboot',
  'Spring MVC': 'spring',
  React: 'react',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  MySQL: 'mysql',
  MongoDB: 'mongodb',
  Docker: 'docker',
  Flutter: 'flutter',
  Dart: 'dart',
  Firebase: 'firebase',
  Laravel: 'laravel',
  PHP: 'php',
  Java: 'openjdk',
  'Node.js': 'nodedotjs',
  'Vue 3': 'vuedotjs',
  JWT: 'jsonwebtokens',
  Hibernate: 'hibernate',
  Leaflet: 'leaflet',
  JSP: 'openjdk',
  HTML: 'html5',
  CSS: 'css',
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      layout
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: Math.min(index * 0.07, 0.35) }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <Link to={`/projects/${project.slug}`} className="flex h-full flex-col">
        {/* Header band with the project's logo row */}
        <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-accent/10 via-surface/40 to-transparent p-6 dark:via-bg-soft/60">
          <div className="flex items-start justify-between gap-3">
            <Badge variant="accent">{project.type}</Badge>
            {project.status === 'ongoing' && <Badge variant="outline">Ongoing</Badge>}
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            {project.primaryTech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                title={tech}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card shadow-sm transition-transform duration-300 group-hover:scale-105"
              >
                <SkillIcon
                  icon={techIconSlugs[tech]}
                  fallbackIcon="Code"
                  label={tech}
                  className="h-4 w-4"
                />
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-bold transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <ArrowUpRight
              size={20}
              className="shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {project.primaryTech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface/70 px-2 py-1 text-xs text-muted dark:bg-bg-soft"
              >
                {tech}
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1.5 text-xs text-subtle">
              {project.isPrivate && <Lock size={12} />}
              {project.period}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
