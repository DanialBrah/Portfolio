import { PageTransition } from '@/components/motion/PageTransition'
import { Hero } from '@/features/home/components/Hero'
import { QuickStats } from '@/features/home/components/QuickStats'
import { FeaturedProjects } from '@/features/home/components/FeaturedProjects'
import { SkillsPreview } from '@/features/home/components/SkillsPreview'
import { CtaBanner } from '@/features/home/components/CtaBanner'
import { siteConfig } from '@/config/site'

export default function HomePage() {
  return (
    <PageTransition>
      {/* React 19 hoists these into <head> automatically. */}
      <title>{`${siteConfig.name} — ${siteConfig.title}`}</title>
      <meta name="description" content={siteConfig.tagline} />

      <Hero />
      <QuickStats />
      <FeaturedProjects />
      <SkillsPreview />
      <CtaBanner />
    </PageTransition>
  )
}
