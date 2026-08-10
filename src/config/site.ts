import type { NavItem, SocialLink } from '@/types'

export const siteConfig = {
  name: 'Mohd Danial Hakim',
  fullName: 'Mohd Danial Hakim Bin Zahari',
  shortName: 'Danial Hakim',
  initials: 'MDH',
  title: 'Software Engineer',
  /** Cycled by the hero's typing animation. */
  roles: [
    'Software Engineer',
    'Full-Stack Developer',
    'Backend Developer',
    'Mobile App Developer',
  ],
  tagline:
    'Computer Science (Software Engineering) student at Universiti Teknologi Malaysia, building full-stack web and mobile products end to end.',
  location: 'Puncak Alam, Selangor, Malaysia',
  email: 'danialx003@gmail.com',
  phone: '+6013 2942460',
  phoneHref: '+60132942460',
  resumePath: '/resume/MohdDanialHakim-CV.pdf',
  url: 'https://danialhakim.vercel.app',
} as const

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/DanialBrah',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-danial-hakim/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: 'gmail',
  },
]

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]
