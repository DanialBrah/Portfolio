import type { Stat } from '@/types'

export const summary = [
  'Passionate Computer Science student with hands-on experience across backend and frontend development — building APIs, designing data models and shipping responsive web and mobile applications.',
  'I have a strong foundation in programming, system design and problem-solving, and I enjoy the part of the job where you analyse an issue, debug the system and land a fix that holds up. Adaptable and quick to pick up new technologies, I am eager to apply what I know to real-world products.',
]

export const stats: Stat[] = [
  { label: 'CGPA', value: 4.0, decimals: 1, icon: 'GraduationCap' },
  { label: 'Projects Built', value: 7, suffix: '+', icon: 'Boxes' },
  { label: 'Internships', value: 2, icon: 'Briefcase' },
  { label: 'Leadership Roles', value: 3, icon: 'Users' },
]

/** Rendered as the hero's floating logo chips. */
export const heroTech: string[] = [
  'react',
  'spring',
  'laravel',
  'flutter',
  'typescript',
  'docker',
  'mysql',
  'openjdk',
]
