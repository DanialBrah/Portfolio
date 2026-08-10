import { activities } from '@/data/certifications'
import { Card } from '@/components/ui/Card'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { UiIcon } from '@/components/common/UiIcon'

export function ActivitiesGrid() {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity) => (
        <StaggerItem key={activity.id} className="h-full">
          <Card interactive className="flex h-full flex-col">
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
              <UiIcon name={activity.icon} size={20} strokeWidth={1.8} />
            </span>

            <h3 className="font-display text-base font-bold">{activity.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{activity.organization}</p>
            <p className="mt-0.5 text-xs text-subtle">{activity.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{activity.description}</p>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  )
}
