import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/cn'

/**
 * Profile photo with a monogram fallback.
 *
 * The image is resolved at build time from `src/assets/images/`. Vite's
 * `import.meta.glob` is used rather than a static import so the app still
 * builds before the photo has been added — a missing file leaves `src`
 * undefined and the monogram renders instead of breaking the bundle.
 *
 * The pattern must be relative: `import.meta.glob` is statically analysed and
 * does not resolve the `@` alias.
 */
const profileImages = import.meta.glob<{ default: string }>(
  '../../assets/images/profile.{jpg,jpeg,png,webp,avif}',
  { eager: true },
)

const profileSrc = Object.values(profileImages)[0]?.default

export function ProfileImage({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(profileSrc) && !failed

  return (
    <div
      className={cn(
        'relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-accent/18 via-surface/60 to-surface-300/25 dark:to-bg-soft',
        className,
      )}
    >
      {showImage ? (
        <img
          src={profileSrc}
          alt={`Portrait of ${siteConfig.fullName}`}
          width={560}
          height={560}
          loading="eager"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <span className="font-display text-6xl font-extrabold text-accent/70 sm:text-7xl">
            {siteConfig.initials}
          </span>
        </div>
      )}
    </div>
  )
}
