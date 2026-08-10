import { siteConfig } from '@/config/site'

/** Branded placeholder shown while a lazily loaded route chunk downloads. */
export function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span className="grid h-14 w-14 animate-pulse place-items-center rounded-2xl bg-accent font-display font-bold text-on-accent">
          {siteConfig.initials}
        </span>
        <span className="text-sm text-subtle">Loading…</span>
      </div>
    </div>
  )
}
