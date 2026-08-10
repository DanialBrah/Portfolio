import { Download, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { summary } from '@/data/profile'
import { PageTransition } from '@/components/motion/PageTransition'
import { PageHeader } from '@/components/common/PageHeader'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/motion/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'
import { ProfileImage } from '@/components/common/ProfileImage'
import { SocialLinks } from '@/components/common/SocialLinks'
import { EducationTimeline } from '@/features/about/components/EducationTimeline'
import { ActivitiesGrid } from '@/features/about/components/ActivitiesGrid'
import { CertificationList } from '@/features/about/components/CertificationList'
import { slideInLeft, slideInRight } from '@/lib/motion-variants'

export default function AboutPage() {
  return (
    <PageTransition>
      <title>About — Mohd Danial Hakim</title>
      <meta
        name="description"
        content="Computer Science (Software Engineering) student at Universiti Teknologi Malaysia with a 4.0 CGPA, building full-stack web and mobile applications."
      />

      <PageHeader
        eyebrow="Get to know me"
        title="About Me"
        description="A Computer Science student who likes taking an idea all the way from a data model to a shipped interface."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal variants={slideInLeft}>
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent/25 to-surface-300/25 blur-xl"
              />
              <div className="relative rounded-3xl border border-border bg-card p-3 shadow-lg">
                <ProfileImage />
              </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal variants={slideInRight}>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              {siteConfig.fullName}
            </h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-subtle">
              <MapPin size={15} className="text-accent" />
              {siteConfig.location}
            </p>

            <div className="mt-6 space-y-4">
              {summary.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold tracking-wider text-subtle uppercase">
                  Focus
                </dt>
                <dd className="mt-1 text-sm text-muted">
                  Backend engineering, full-stack web, cross-platform mobile
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider text-subtle uppercase">
                  Graduating
                </dt>
                <dd className="mt-1 text-sm text-muted">October 2026 — UTM, CGPA 4.0</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonAnchor href={siteConfig.resumePath} download>
                <Download size={18} />
                Download CV
              </ButtonAnchor>
              <ButtonLink to="/contact" variant="secondary">
                <Mail size={18} />
                Contact me
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
          description="Where I studied, and what I focused on."
        />
        <div className="mt-12">
          <EducationTimeline />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Beyond the code"
          title="Activities & Leadership"
          description="Committee positions and university programmes where I have taken on responsibility outside of coursework."
        />
        <div className="mt-12">
          <ActivitiesGrid />
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications & Awards"
          description="Programmes I have completed and competitions I have placed in."
        />
        <div className="mt-12">
          <CertificationList />
        </div>
      </Section>
    </PageTransition>
  )
}
