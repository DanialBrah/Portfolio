import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-55'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-on-accent hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]',
  secondary:
    'border border-border bg-card text-fg hover:border-accent/50 hover:text-accent active:scale-[0.98]',
  ghost: 'text-muted hover:bg-accent/10 hover:text-accent',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

/**
 * `children` is omitted from the native props so the required version in
 * CommonProps wins — the two declarations are otherwise incompatible.
 */
interface ButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {children}
    </button>
  )
}

/** Internal navigation styled as a button. */
export function ButtonLink({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variantStyles[variant], sizeStyles[size], className)}>
      {children}
    </Link>
  )
}

/** External links styled as a button; always opens in a new tab. */
export function ButtonAnchor({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  download = false,
}: CommonProps & { href: string; download?: boolean }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
      {...(download ? { download: '' } : {})}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
