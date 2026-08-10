import { Award, BadgeCheck } from 'lucide-react'
import { awards, certifications } from '@/data/certifications'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Stagger, StaggerItem } from '@/components/motion/Stagger'

export function CertificationList() {
  const [primary, ...others] = certifications

  return (
    <Stagger className="grid gap-6 lg:grid-cols-2">
      <StaggerItem className="h-full">
        <Card className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
              <BadgeCheck size={20} strokeWidth={1.8} />
            </span>
            {primary.period && <Badge variant="accent">{primary.period}</Badge>}
          </div>

          <h3 className="mt-4 font-display text-base font-bold">{primary.title}</h3>
          {primary.issuer && <p className="mt-1 text-sm font-medium text-accent">{primary.issuer}</p>}
          {primary.description && (
            <p className="mt-4 text-sm leading-relaxed text-muted">{primary.description}</p>
          )}
        </Card>
      </StaggerItem>

      <StaggerItem className="h-full">
        <Card className="flex h-full flex-col">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
            <Award size={20} strokeWidth={1.8} />
          </span>

          <h3 className="mt-4 font-display text-base font-bold">Certifications &amp; Awards</h3>

          <ul className="mt-4 space-y-3">
            {others.map((certification) => (
              <li key={certification.id} className="flex gap-3 text-sm text-muted">
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                {certification.title}
              </li>
            ))}
            {awards.map((award) => (
              <li key={award.id} className="flex gap-3 text-sm text-muted">
                <Award size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {award.title}
                  {award.detail && <span className="text-subtle"> — {award.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </StaggerItem>
    </Stagger>
  )
}
