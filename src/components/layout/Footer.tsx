import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navItems, siteConfig } from '@/config/site'
import { Container } from '@/components/ui/Container'
import { SocialLinks } from '@/components/common/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/35 dark:bg-bg-soft/50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm text-on-accent">
                {siteConfig.initials}
              </span>
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-semibold tracking-wider uppercase">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-wider uppercase">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-subtle sm:flex-row">
          <p>
            © {year} {siteConfig.fullName}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, TailwindCSS and Motion.</p>
        </div>
      </Container>
    </footer>
  )
}
