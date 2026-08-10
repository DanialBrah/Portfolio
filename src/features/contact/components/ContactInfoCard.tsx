import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { Card } from '@/components/ui/Card'
import { SocialLinks } from '@/components/common/SocialLinks'

function CopyableRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href: string
}) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <li className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
        <Icon size={18} strokeWidth={1.8} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium tracking-wider text-subtle uppercase">{label}</p>
        <a
          href={href}
          className="block truncate text-sm text-fg transition-colors hover:text-accent"
        >
          {value}
        </a>
      </div>

      <button
        type="button"
        onClick={() => void copy(value)}
        aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
        title={copied ? 'Copied' : 'Copy'}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border text-subtle transition-colors hover:border-accent/40 hover:text-accent"
      >
        {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
      </button>
    </li>
  )
}

export function ContactInfoCard() {
  return (
    <Card className="h-full">
      <h2 className="font-display text-lg font-bold">Contact details</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Prefer to reach out directly? Any of these work.
      </p>

      <ul className="mt-6 space-y-4">
        <CopyableRow
          icon={Mail}
          label="Email"
          value={siteConfig.email}
          href={`mailto:${siteConfig.email}`}
        />
        <CopyableRow
          icon={Phone}
          label="Phone"
          value={siteConfig.phone}
          href={`tel:${siteConfig.phoneHref}`}
        />

        <li className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
            <MapPin size={18} strokeWidth={1.8} />
          </span>
          <div>
            <p className="text-xs font-medium tracking-wider text-subtle uppercase">Location</p>
            <p className="text-sm text-fg">{siteConfig.location}</p>
          </div>
        </li>
      </ul>

      <div className="mt-8 border-t border-border pt-6">
        <p className="mb-4 text-xs font-medium tracking-wider text-subtle uppercase">
          Find me online
        </p>
        <SocialLinks />
      </div>
    </Card>
  )
}
