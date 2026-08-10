import type { Project, ProjectCategory } from '@/types'

/**
 * Selected projects. Stacks below were read from each project's source
 * (`package.json` / `pom.xml` / `composer.json`) rather than from memory, so
 * they reflect what is actually installed.
 *
 * To add a project, append an object here — the grid, the filters, the
 * featured row on the home page and the /projects/:slug detail route all
 * derive from this array.
 */
export const projects: Project[] = [
  {
    slug: 'unisphere',
    title: 'UniSphere',
    tagline: 'University campus super-app connecting students, alumni, employers and clubs.',
    description: [
      'UniSphere is a modular campus super-app that brings the whole university ecosystem into one place — students, alumni, employers, clubs and the institutions themselves. It ships a social feed, communities, real-time messaging, a jobs board, events and an AI chatbot.',
      'The backend follows a domain-driven modular architecture, with each domain owning its own controllers, services, entities and mappers rather than sharing one flat package. That separation is what keeps the feature surface manageable as the app grows.',
    ],
    categories: ['fullstack', 'web', 'backend'],
    type: 'Full-Stack Platform',
    period: 'Ongoing',
    status: 'ongoing',
    featured: true,
    role: 'Solo developer — architecture, backend, frontend and CI/CD',
    highlights: [
      'Architected a Java 21 Spring Boot REST API with Spring Security and JWT authentication, JPA/Hibernate over MySQL, Redis caching and AWS S3 media storage.',
      'Implemented real-time messaging over WebSocket (STOMP + SockJS) so conversations update live across clients.',
      'Built a responsive React 19 + TypeScript frontend with TanStack React Query for server state, Zustand for client state and React Hook Form + Zod for validated forms.',
      'Organised the backend by domain — identity, social/community, campus/news and campus/chatbot — each with its own controller, service, repository and mapper layers.',
      'Set up CI/CD with Docker and self-hosted GitHub Actions runners, plus automated testing (JUnit, Testcontainers, Playwright) and SonarQube code-quality analysis.',
    ],
    stack: [
      {
        label: 'Backend',
        items: [
          'Java 21',
          'Spring Boot',
          'Spring Security (JWT)',
          'JPA / Hibernate',
          'WebSocket (STOMP)',
          'Liquibase',
        ],
      },
      {
        label: 'Frontend',
        items: [
          'React 19',
          'TypeScript',
          'Vite',
          'TailwindCSS',
          'TanStack React Query',
          'Zustand',
          'React Hook Form',
          'Zod',
        ],
      },
      { label: 'Data & Storage', items: ['MySQL', 'Redis', 'AWS S3'] },
      {
        label: 'DevOps & Quality',
        items: [
          'Docker',
          'GitHub Actions',
          'JUnit',
          'Testcontainers',
          'Playwright',
          'Vitest',
          'SonarQube',
        ],
      },
    ],
    primaryTech: ['Spring Boot', 'React', 'TypeScript', 'MySQL', 'Docker'],
    links: [
      { label: 'Live Demo', href: 'https://unisphere-frontend-kohl.vercel.app', kind: 'demo' },
      { label: 'Frontend', href: 'https://github.com/DanialBrah/UniSphere-frontend', kind: 'github' },
      { label: 'Backend', href: 'https://github.com/DanialBrah/UniSphere-backend', kind: 'github' },
    ],
  },
  {
    slug: 'first-aid-plus',
    title: 'First Aid+ Emergency Assistance System',
    tagline: 'Final year project — first aid guidance and emergency assistance on mobile.',
    description: [
      'First Aid+ is my final year project: a mobile application that walks people through first aid procedures and connects them to emergency assistance when it matters most. It pairs a Flutter app for the public with a web-based admin panel for the people managing content and responders.',
      'The mobile app is backed by Firebase for authentication and real-time data, with a Laravel API handling the heavier server-side work. The admin panel adds map-based visualisation so administrators can see incidents geographically rather than as rows in a table.',
    ],
    categories: ['mobile', 'fullstack', 'web'],
    type: 'Mobile + Admin Panel',
    period: 'May 2025 – July 2026',
    status: 'ongoing',
    featured: true,
    role: 'Full-stack developer — mobile app, API and admin panel',
    highlights: [
      'Designed and developed a cross-platform Flutter mobile application delivering first aid guidance and emergency assistance.',
      'Modelled the domain across ten Dart models covering admin profiles, chat, incidents and user records, each with explicit serialisation.',
      'Built a Laravel backend exposing the APIs the mobile app and admin panel share.',
      'Developed a React admin panel with Material UI and TailwindCSS, using Leaflet for interactive map-based incident visualisation.',
      'Integrated external APIs and Firebase services for authentication and real-time updates.',
    ],
    stack: [
      { label: 'Mobile', items: ['Flutter', 'Dart', 'Firebase'] },
      { label: 'Backend', items: ['Laravel', 'PHP', 'MySQL'] },
      {
        label: 'Admin Panel',
        items: ['React', 'Material UI', 'TailwindCSS', 'React Router', 'Leaflet'],
      },
      { label: 'Infrastructure', items: ['Docker', 'Firebase Auth'] },
    ],
    primaryTech: ['Flutter', 'Firebase', 'Laravel', 'React', 'Leaflet'],
    links: [{ label: 'Mobile App', href: 'https://github.com/DanialBrah/FirstAid', kind: 'github' }],
    isPrivate: true,
  },
  {
    slug: 'makanmate',
    title: 'MakanMate',
    tagline: 'Social food-discovery app for finding and reviewing nearby restaurants.',
    description: [
      'MakanMate is a cross-platform food community app where users discover, post and share food spots in a social-media-style feed. It was built for food lovers who want recommendations from real people rather than aggregate star ratings.',
      'Firebase handles the whole backend — authentication, real-time posting and live feed updates — which kept the app responsive without running a dedicated server.',
    ],
    categories: ['mobile'],
    type: 'Mobile Application',
    period: 'Jan 2025',
    status: 'completed',
    featured: true,
    role: 'Mobile developer',
    highlights: [
      'Developed a cross-platform food community mobile app in Flutter, enabling users to discover, post and share food spots.',
      'Built a social-media-style feed with real-time updates as new posts arrive.',
      'Used Firebase for authentication, real-time posting and feed synchronisation.',
      'Implemented review and rating flows for nearby restaurants.',
    ],
    stack: [
      { label: 'Mobile', items: ['Flutter', 'Dart'] },
      { label: 'Backend', items: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage'] },
    ],
    primaryTech: ['Flutter', 'Dart', 'Firebase'],
    links: [{ label: 'Source', href: 'https://github.com/DanialBrah/MakanMate', kind: 'github' }],
  },
  {
    slug: 'tvpss',
    title: 'TVPSS School Content Management System',
    tagline: 'Web platform to manage and monitor the TVPSS programme across Johor schools.',
    description: [
      'TVPSS is a content management system built for schools across Johor to manage and monitor their participation in the TVPSS programme. It handles school records, media content and programme tracking with role-based access.',
      'The application is a classic Java enterprise stack — Spring MVC serving JSP views, Hibernate over MySQL for persistence and Spring Security enforcing role-based permissions.',
    ],
    categories: ['web', 'fullstack', 'backend'],
    type: 'Web Application',
    period: 'Jan 2025',
    status: 'completed',
    featured: false,
    role: 'Full-stack developer',
    highlights: [
      'Developed a web-based platform to manage and monitor the TVPSS programme across schools in Johor.',
      'Built the backend with Spring MVC and Hibernate ORM over MySQL.',
      'Secured the application with Spring Security, enforcing role-based access for administrators and school users.',
      'Implemented file upload handling for school media content.',
      'Exposed REST endpoints for integration alongside server-rendered JSP/JSTL views.',
    ],
    stack: [
      { label: 'Backend', items: ['Java', 'Spring MVC', 'Spring Security', 'Hibernate', 'Maven'] },
      { label: 'Frontend', items: ['JSP', 'JSTL', 'JavaScript', 'HTML', 'CSS'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    primaryTech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JSP'],
    links: [
      { label: 'Source', href: 'https://github.com/DanialBrah/TVPSS-PROJECT', kind: 'github' },
    ],
  },
  {
    slug: 'wellcheck',
    title: 'WellCheck',
    tagline: 'Cross-platform health monitoring app for tracking personal well-being.',
    description: [
      'WellCheck is a mobile health monitoring application that lets users track and assess their well-being over time, turning scattered self-reported data into something reviewable.',
      'The Flutter client talks to a Node.js backend with MongoDB, chosen so the health-record schema could evolve without migrations while the assessment model was still being refined.',
    ],
    categories: ['mobile', 'fullstack'],
    type: 'Mobile Application',
    period: 'Jan 2025',
    status: 'completed',
    featured: false,
    role: 'Mobile and backend developer',
    highlights: [
      "Built a cross-platform health monitoring mobile app in Flutter to track and assess users' well-being.",
      'Integrated a Node.js backend with MongoDB for storing health records and enabling data retrieval.',
      'Implemented assessment flows that summarise tracked data into readable well-being insights.',
    ],
    stack: [
      { label: 'Mobile', items: ['Flutter', 'Dart'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
      { label: 'Database', items: ['MongoDB'] },
    ],
    primaryTech: ['Flutter', 'Node.js', 'MongoDB'],
    links: [
      { label: 'Source', href: 'https://github.com/DanialBrah/Wellcheck-Mobile', kind: 'github' },
    ],
  },
  {
    slug: 'taskmaster',
    title: 'TaskMaster',
    tagline: 'Task management API with JWT authentication and a Vue 3 client.',
    description: [
      'TaskMaster is a task management system built around a secure REST API. Users register, log in and manage their own tasks, with JWT enforcing that everyone only sees their own data.',
      'The API is written in PHP and paired with a Vue 3 single-page frontend — a deliberate change of stack from my usual React work to get familiar with the Composition API and Vue Router.',
    ],
    categories: ['web', 'backend', 'fullstack'],
    type: 'Full-Stack Application',
    period: 'Jun 2025',
    status: 'completed',
    featured: false,
    role: 'Full-stack developer',
    highlights: [
      'Built a task management REST API with JWT-based authentication and authorisation.',
      'Implemented create, manage and track flows for tasks, scoped per authenticated user.',
      'Developed the client as a Vue 3 single-page application with Vue Router.',
      'Designed the relational schema and queries backing the task and user models.',
    ],
    stack: [
      { label: 'Backend', items: ['PHP', 'REST APIs', 'JWT', 'Composer'] },
      { label: 'Frontend', items: ['Vue 3', 'Vue Router', 'JavaScript'] },
      { label: 'Database', items: ['MySQL'] },
    ],
    primaryTech: ['PHP', 'Vue 3', 'JWT', 'MySQL'],
    links: [{ label: 'Source', href: 'https://github.com/DanialBrah/TaskMaster', kind: 'github' }],
  },
  {
    slug: 'jobbridge',
    title: 'JobBridge',
    tagline: 'Job portal connecting employers and job seekers.',
    description: [
      'JobBridge is a job portal with two distinct sides: employers post and manage vacancies, while job seekers browse listings, maintain a profile and apply. An admin view sits above both for oversight.',
      'It was built with a plain PHP and MySQL backend and a hand-written HTML/CSS/JavaScript frontend — no framework — which made it a good exercise in structuring server-side code and form validation from first principles.',
    ],
    categories: ['web', 'fullstack'],
    type: 'Web Application',
    period: '2024',
    status: 'completed',
    featured: false,
    role: 'Full-stack developer',
    highlights: [
      'Developed a job portal with separate employer, employee and administrator roles.',
      'Implemented job posting, browsing and application workflows backed by PHP and MySQL.',
      'Built profile management with server-side validation, including live username and email availability checks.',
      'Hand-rolled the entire frontend in HTML, CSS and vanilla JavaScript.',
    ],
    stack: [
      { label: 'Backend', items: ['PHP', 'MySQL'] },
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
    ],
    primaryTech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    links: [
      { label: 'Live Demo', href: 'https://danialbrah.github.io/JobBridgeProject/', kind: 'demo' },
      {
        label: 'Source',
        href: 'https://github.com/DanialBrah/JobBridgeProject',
        kind: 'github',
      },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export const projectFilters: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'backend', label: 'Backend' },
]
