import type { Experience } from '@/types'

/**
 * Work history and leadership roles, newest first.
 *
 * To add a role from LinkedIn, append an object here — the timeline, the
 * "Leadership Roles" stat and the About page all read from this array.
 */
export const experiences: Experience[] = [
  {
    id: 'webby-group',
    role: 'PHP and Backend Developer Intern',
    organization: 'Webby Group Sdn. Bhd.',
    location: 'Puchong, Selangor',
    period: 'Sept 2025 – Feb 2026',
    kind: 'work',
    badge: 'Internship',
    highlights: [
      'Developed and maintained backend systems using PHP Laravel, implementing scalable server-side logic and a structured application architecture.',
      'Designed and managed GraphQL APIs to enable efficient communication between the frontend and backend.',
      'Conducted debugging, testing and troubleshooting to resolve system issues, ensuring stability and reliability.',
    ],
    tech: ['PHP', 'Laravel', 'GraphQL', 'MySQL', 'REST APIs'],
  },
  {
    id: 'hollistics-lab',
    role: 'Software Engineer (Voluntary Intern)',
    organization: 'Hollistics Lab Sdn. Bhd.',
    location: 'Iskandar Puteri, Johor',
    period: 'Aug 2024 – Sept 2024',
    kind: 'work',
    badge: 'Internship',
    highlights: [
      'Developed and refined the System Requirements Specification (SRS) and System Testing Document (STD) for software validation.',
      'Designed and wrote the user manual for MyHalalGig, providing clear guidance on system usage.',
    ],
    tech: ['SRS', 'STD', 'Technical Writing', 'Software Validation'],
  },
  {
    id: 'utmxhackathon-director',
    role: "Director of UTMxHackathon'25",
    organization: 'Persatuan Mahasiswa Komputer (PERSAKA), UTM',
    location: 'Skudai, Johor',
    period: 'April 2025',
    kind: 'leadership',
    badge: 'Event Lead',
    highlights: [
      "Led the planning and execution of UTMxHackathon'25, aimed at fostering innovation in technology.",
      'Coordinated a team of organisers, ensuring smooth event operations including logistics and communication.',
    ],
  },
  {
    id: 'persaka-vice-treasurer',
    role: 'Vice Treasurer',
    organization: 'Persatuan Mahasiswa Komputer (PERSAKA), UTM',
    location: 'Skudai, Johor',
    period: 'Aug 2024 – Aug 2025',
    kind: 'leadership',
    badge: 'Committee',
    highlights: [
      'Managed and supervised the financial records and budget for the organisation.',
      'Assisted in fund allocation, expense tracking and financial planning for club activities and events.',
    ],
  },
  {
    id: 'persaka-academic-exco',
    role: 'Academic Exco',
    organization: 'Persatuan Mahasiswa Komputer (PERSAKA), UTM',
    location: 'Skudai, Johor',
    period: 'Aug 2023 – Aug 2024',
    kind: 'leadership',
    badge: 'Committee',
    highlights: [
      'Collaborated with faculty members and industry professionals to arrange knowledge-sharing sessions.',
      'Played a key role in promoting a learning-focused community within the association.',
    ],
  },
]

export const workExperience = experiences.filter((item) => item.kind === 'work')
export const leadershipExperience = experiences.filter((item) => item.kind === 'leadership')
