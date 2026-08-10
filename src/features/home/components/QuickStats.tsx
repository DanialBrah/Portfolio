import { stats } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'
import { AnimatedCounter } from '@/components/motion/AnimatedCounter'
import { UiIcon } from '@/components/common/UiIcon'

export function QuickStats() {
  return (
    <section className="border-y border-border bg-surface/40 py-12 dark:bg-bg-soft/60">
      <Container>
        <Stagger className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-accent">
                <UiIcon name={stat.icon} size={22} strokeWidth={1.8} />
              </div>
              <p className="font-display text-3xl font-bold sm:text-4xl">
                <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}
