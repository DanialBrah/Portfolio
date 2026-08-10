import { Briefcase, Users } from 'lucide-react'
import { leadershipExperience, workExperience } from '@/data/experience'
import { PageTransition } from '@/components/motion/PageTransition'
import { PageHeader } from '@/components/common/PageHeader'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/motion/Reveal'
import { ExperienceTimeline } from '@/features/experience/components/ExperienceTimeline'

export default function ExperiencePage() {
  return (
    <PageTransition>
      <title>Experience — Mohd Danial Hakim</title>
      <meta
        name="description"
        content="Internships at Webby Group and Hollistics Lab, plus leadership roles with PERSAKA UTM including directing UTMxHackathon'25."
      />

      <PageHeader
        eyebrow="Career"
        title="Experience"
        description="Where I have worked, what I built there, and the teams I have helped lead along the way."
      />

      <Section>
        <Reveal className="mb-10 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
            <Briefcase size={20} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold">Professional Experience</h2>
            <p className="text-sm text-muted">Internships and industry work</p>
          </div>
        </Reveal>

        <ExperienceTimeline items={workExperience} />
      </Section>

      <Section muted>
        <Reveal className="mb-10 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
            <Users size={20} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold">Leadership &amp; Involvement</h2>
            <p className="text-sm text-muted">Committee positions and events I have led</p>
          </div>
        </Reveal>

        <ExperienceTimeline items={leadershipExperience} />
      </Section>
    </PageTransition>
  )
}
