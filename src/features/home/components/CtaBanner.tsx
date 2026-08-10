import { ArrowRight, Download } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Container } from '@/components/ui/Container'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/12 via-card to-surface/40 p-10 text-center sm:p-14 dark:to-bg-soft">
          <div
            aria-hidden="true"
            className="absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">Let&rsquo;s build something together</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              I&rsquo;m currently open to software engineering roles and interesting collaborations.
              Whether you have a project in mind or just want to talk shop, my inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink to="/contact" size="lg">
                Get in touch
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonAnchor href={siteConfig.resumePath} variant="secondary" size="lg" download>
                <Download size={18} />
                Download CV
              </ButtonAnchor>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
