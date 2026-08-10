import { PageTransition } from '@/components/motion/PageTransition'
import { PageHeader } from '@/components/common/PageHeader'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { ContactInfoCard } from '@/features/contact/components/ContactInfoCard'
import { slideInLeft, slideInRight } from '@/lib/motion-variants'

export default function ContactPage() {
  return (
    <PageTransition>
      <title>Contact — Mohd Danial Hakim</title>
      <meta
        name="description"
        content="Get in touch with Mohd Danial Hakim about software engineering roles, collaborations or project work."
      />

      <PageHeader
        eyebrow="Say hello"
        title="Get In Touch"
        description="I am open to software engineering roles, internships and collaborations. Send a message and I will get back to you."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal variants={slideInLeft}>
            <Card className="h-full">
              <h2 className="font-display text-lg font-bold">Send me a message</h2>
              <p className="mt-2 mb-6 text-sm leading-relaxed text-muted">
                Fill in the form below and it will land straight in my inbox.
              </p>
              <ContactForm />
            </Card>
          </Reveal>

          <Reveal variants={slideInRight}>
            <ContactInfoCard />
          </Reveal>
        </div>
      </Section>
    </PageTransition>
  )
}
