import { motion } from 'motion/react'
import type { ProjectCategory } from '@/types'
import { projectFilters } from '@/data/projects'
import { cn } from '@/lib/cn'

export type FilterId = ProjectCategory | 'all'

interface ProjectFiltersProps {
  active: FilterId
  onChange: (filter: FilterId) => void
  counts: Record<string, number>
}

export function ProjectFilters({ active, onChange, counts }: ProjectFiltersProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex flex-wrap justify-center gap-2"
    >
      {projectFilters.map((filter) => {
        const isActive = filter.id === active

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              'relative rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'border-transparent text-on-accent'
                : 'border-border text-muted hover:border-accent/40 hover:text-accent',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">
              {filter.label}
              <span className={cn('ml-1.5 text-xs', isActive ? 'opacity-75' : 'text-subtle')}>
                {counts[filter.id] ?? 0}
              </span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
