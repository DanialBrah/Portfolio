import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name (at least 2 characters).')
    .max(80, 'That name is a little too long.'),
  email: z.email('Please enter a valid email address.').max(120, 'That email is too long.'),
  subject: z
    .string()
    .trim()
    .min(3, 'Please add a short subject.')
    .max(120, 'Please keep the subject under 120 characters.'),
  message: z
    .string()
    .trim()
    .min(20, 'Please write at least 20 characters so I know how to help.')
    .max(2000, 'Please keep the message under 2000 characters.'),
  /**
   * Honeypot. Real users never see this field, so anything in it is a bot and
   * the submission is dropped client-side before it reaches Web3Forms.
   */
  botcheck: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>
