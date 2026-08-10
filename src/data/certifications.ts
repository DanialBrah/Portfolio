import type { Activity, Award, Certification } from '@/types'

export const certifications: Certification[] = [
  {
    id: 'gkk-fullstack-java',
    title: 'The Certified Full Stack Java with AI Program',
    issuer: 'GKK Consultants',
    period: 'Ongoing',
    description:
      'Intensive full-stack Java program covering core Java, object-oriented programming, Spring Boot, RESTful APIs and front-end integration for end-to-end application development, building a full-stack project with React and Spring Boot alongside AI tooling.',
  },
  { id: 'voluntary-industrial-training', title: 'Voluntary Industrial Training' },
  { id: 'ccoe-mobile-security', title: 'CcoE Mobile Security' },
  { id: 'ai-untuk-rakyat', title: 'AI untuk Rakyat' },
]

export const awards: Award[] = [
  {
    id: 'utmxhackathon-2024',
    title: 'Finalist — UTMxHACKATHON 2024',
    detail: '2nd Place',
  },
  {
    id: 'microbit-innovation',
    title: 'Innovation Micro:Bit Competition',
    detail: '1st Place',
  },
]

/**
 * Extra-curricular involvement shown on the About page. Leadership positions
 * live in `experience.ts` so they can share the timeline; this array is for
 * broader activities.
 */
export const activities: Activity[] = [
  {
    id: 'utmxhackathon-25',
    title: "Director, UTMxHackathon'25",
    organization: 'PERSAKA UTM',
    period: 'April 2025',
    description:
      'Led end-to-end planning and delivery of a university-wide hackathon, coordinating a team of organisers across logistics, sponsorship and communications.',
    icon: 'Trophy',
  },
  {
    id: 'persaka-treasury',
    title: 'Vice Treasurer, PERSAKA',
    organization: 'PERSAKA UTM',
    period: 'Aug 2024 – Aug 2025',
    description:
      'Owned the association budget: financial records, fund allocation, expense tracking and planning across a full year of club activities.',
    icon: 'Users',
  },
  {
    id: 'persaka-academic',
    title: 'Academic Exco, PERSAKA',
    organization: 'PERSAKA UTM',
    period: 'Aug 2023 – Aug 2024',
    description:
      'Arranged knowledge-sharing sessions with faculty and industry professionals, building a learning-focused community within the association.',
    icon: 'GraduationCap',
  },
]
