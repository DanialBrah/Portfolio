import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, ExternalLink, Lock, UserRound } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { PageTransition } from '@/components/motion/PageTransition'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ButtonAnchor } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { ProjectCard } from '@/components/common/ProjectCard'
import { SkillIcon } from '@/components/common/SkillIcon'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  // Unknown slug — hand off to the 404 route rather than rendering an empty shell.
  if (!project) {
    return <Navigate to="/404" replace />
  }

  const relatedProjects = projects
    .filter(
      (item) =>
        item.slug !== project.slug &&
        item.categories.some((category) => project.categories.includes(category)),
    )
    .slice(0, 3)

  return (
    <PageTransition>
      <title>{`${project.title} — Mohd Danial Hakim`}</title>
      <meta name="description" content={project.tagline} />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border bg-surface/40 py-14 sm:py-16 dark:bg-bg-soft/50">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        />

        <Container className="relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <Reveal className="mt-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent">{project.type}</Badge>
              {project.status === 'ongoing' && <Badge variant="outline">Ongoing</Badge>}
              {project.isPrivate && (
                <Badge variant="outline">
                  <Lock size={11} />
                  Private repository
                </Badge>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-subtle">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} />
                {project.period}
              </span>
              <span className="flex items-center gap-1.5">
                <UserRound size={15} />
                {project.role}
              </span>
            </div>

            {project.links.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link, index) => (
                  <ButtonAnchor
                    key={link.href}
                    href={link.href}
                    variant={index === 0 ? 'primary' : 'secondary'}
                  >
                    {link.kind === 'github' ? (
                      <SkillIcon icon="github" label="GitHub" monochrome className="h-4 w-4" />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {link.label}
                  </ButtonAnchor>
                ))}
              </div>
            )}
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <div className="mt-4 space-y-4">
                {project.description.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="font-display text-2xl font-bold">What I built</h2>
              <ul className="mt-5 space-y-3.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Tech stack sidebar */}
          <Reveal>
            <Card className="lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-bold">Tech Stack</h2>

              <div className="mt-5 space-y-5">
                {project.stack.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-xs font-semibold tracking-wider text-subtle uppercase">
                      {group.label}
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-muted dark:bg-bg-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section muted>
          <h2 className="font-display text-2xl font-bold">Related projects</h2>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related, index) => (
              <StaggerItem key={related.slug} className="h-full">
                <ProjectCard project={related} index={index} />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}
    </PageTransition>
  )
}
