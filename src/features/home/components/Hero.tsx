import { motion } from 'motion/react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { heroTech } from '@/data/profile'
import { Container } from '@/components/ui/Container'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'
import { TypingText } from '@/components/motion/TypingText'
import { SkillIcon } from '@/components/common/SkillIcon'
import { SocialLinks } from '@/components/common/SocialLinks'
import { ProfileImage } from '@/components/common/ProfileImage'
import { fadeInUp, staggerContainer } from '@/lib/motion-variants'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* Decorative backdrop */}
      <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-24 h-80 w-80 animate-blob rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 animate-blob rounded-full bg-surface-300/25 blur-3xl [animation-delay:-6s]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </motion.div>

            <motion.h1 variants={fadeInUp} className="mt-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Hi, I&rsquo;m <span className="text-gradient">Danial Hakim</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 font-display text-xl font-semibold text-muted sm:text-2xl"
            >
              <TypingText phrases={siteConfig.roles} />
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {siteConfig.tagline} I work across Spring Boot, Laravel, React and Flutter — from
              designing the data model to shipping the interface.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 flex items-center gap-2 text-sm text-subtle"
            >
              <MapPin size={16} className="text-accent" />
              {siteConfig.location}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink to="/projects" size="lg">
                View my work
                <ArrowRight size={18} />
              </ButtonLink>
              <ButtonAnchor href={siteConfig.resumePath} variant="secondary" size="lg" download>
                <Download size={18} />
                Download CV
              </ButtonAnchor>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Portrait with orbiting tech chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 via-transparent to-surface-300/30 blur-2xl"
            />
            <div className="relative rounded-3xl border border-border bg-card p-3 shadow-xl">
              <ProfileImage />
            </div>

            {/* Floating logo chips — hidden on small screens to avoid crowding */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden sm:block">
              {heroTech.map((tech, index) => {
                const angle = (index / heroTech.length) * Math.PI * 2 - Math.PI / 2
                const radius = 52

                return (
                  <motion.div
                    key={tech}
                    className="absolute grid h-11 w-11 place-items-center rounded-xl border border-border bg-card shadow-md"
                    style={{
                      left: `${50 + Math.cos(angle) * radius}%`,
                      top: `${50 + Math.sin(angle) * radius}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.07, type: 'spring', stiffness: 260 }}
                  >
                    <motion.div
                      animate={{ y: [0, -7, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.25,
                      }}
                    >
                      <SkillIcon icon={tech} label={tech} className="h-5 w-5" />
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
