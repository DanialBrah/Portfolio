import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, CheckCircle2, Loader, Send } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { contactSchema, type ContactFormValues } from '@/lib/validation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

/*
  This key is PUBLIC by design.

  Any `VITE_*` variable is compiled into the JavaScript bundle, so `.env` keeps
  it out of git but not out of the browser — anyone can read it in DevTools.
  Web3Forms access keys are intended to work that way, but it does mean the key
  can be reused from another origin to send mail to the same inbox.

  The cooldown below only slows down casual abuse from this page. The control
  that actually matters is the "Allowed Domains" allowlist in the Web3Forms
  dashboard — see the Security section of README.md.
*/
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/** Minimum gap between two sends from this page, in milliseconds. */
const SUBMIT_COOLDOWN_MS = 30_000

const fieldClass =
  'w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg transition-colors placeholder:text-subtle focus:border-accent focus:outline-none'

function FieldError({ message }: { message?: string }) {
  if (!message) return null

  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-accent" role="alert">
      <AlertCircle size={13} />
      {message}
    </p>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const lastSubmittedAt = useRef(0)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  /**
   * Without an access key configured, hand the message off to the visitor's
   * mail client instead of failing. The form stays useful on a fresh clone.
   */
  const sendViaMailto = (values: ContactFormValues) => {
    const body = `${values.message}\n\n—\nFrom: ${values.name} <${values.email}>`
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`

    // assign() rather than `location.href = …` — same navigation, but it does
    // not mutate a value owned outside the component.
    window.location.assign(href)
    setStatus('success')
    reset()
  }

  const onSubmit = async (values: ContactFormValues) => {
    // Honeypot tripped — silently pretend it worked so bots do not retry.
    if (values.botcheck) {
      setStatus('success')
      reset()
      return
    }

    // Guard against double-submits from an impatient click or Enter key.
    if (status === 'submitting') return

    const elapsed = Date.now() - lastSubmittedAt.current
    if (lastSubmittedAt.current > 0 && elapsed < SUBMIT_COOLDOWN_MS) {
      const seconds = Math.ceil((SUBMIT_COOLDOWN_MS - elapsed) / 1000)
      setStatus('error')
      setErrorMessage(`Please wait ${seconds}s before sending another message.`)
      return
    }

    if (!WEB3FORMS_KEY) {
      sendViaMailto(values)
      return
    }

    setStatus('submitting')
    setErrorMessage('')
    lastSubmittedAt.current = Date.now()

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          from_name: 'Portfolio Contact Form',
        }),
      })

      const result = (await response.json()) as { success: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'The message could not be sent.')
      }

      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please email me directly instead.',
      )
    }
  }

  /*
    handleSubmit() is invoked inside the event callback rather than during
    render. Calling it directly in the JSX prop would hand React Compiler a
    function that reads a ref and calls Date.now(), which it must then assume
    happens at render time.
  */
  return (
    <form
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
      noValidate
      className="space-y-5"
    >
      {/* Honeypot — hidden from users, irresistible to bots. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
        {...register('botcheck')}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={cn(fieldClass, errors.name && 'border-accent')}
            {...register('name')}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={cn(fieldClass, errors.email && 'border-accent')}
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What is this about?"
          aria-invalid={Boolean(errors.subject)}
          className={cn(fieldClass, errors.subject && 'border-accent')}
          {...register('subject')}
        />
        <FieldError message={errors.subject?.message} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell me about the role, project or idea…"
          aria-invalid={Boolean(errors.message)}
          className={cn(fieldClass, 'resize-y', errors.message && 'border-accent')}
          {...register('message')}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader size={18} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={18} />
              Send message
            </>
          )}
        </Button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.p
              key="success"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              role="status"
              className="flex items-center gap-2 text-sm font-medium text-accent"
            >
              <CheckCircle2 size={16} />
              Thanks — your message is on its way.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              key="error"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              role="alert"
              className="flex items-center gap-2 text-sm font-medium text-accent"
            >
              <AlertCircle size={16} />
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}
