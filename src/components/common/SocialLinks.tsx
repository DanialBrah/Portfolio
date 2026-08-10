import { socialLinks } from '@/config/site'
import { SkillIcon } from '@/components/common/SkillIcon'
import { cn } from '@/lib/cn'

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string
  iconClassName?: string
}) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            title={link.label}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
          >
            <SkillIcon
              icon={link.icon}
              label={link.label}
              monochrome
              className={cn('h-[18px] w-[18px]', iconClassName)}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
