import type { SkillCategory } from '@/types'

/**
 * Skills grouped to mirror the CV.
 *
 * `level` is a self-assessed 0–100 proficiency that drives the progress bar
 * and its count-up label — tune these freely, nothing else needs to change.
 * `icon` is a simple-icons slug; where a brand has no simple-icons entry (AWS,
 * Playwright and LinkedIn were pulled over trademark policy, Testcontainers and
 * Katalon were never added) `src/lib/brand-icons.ts` supplies a custom path or
 * the named `fallbackIcon` from lucide is drawn instead.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    description: 'The languages I reach for across backend, frontend and mobile work.',
    icon: 'Code',
    skills: [
      { name: 'Java', level: 90, icon: 'openjdk' },
      { name: 'HTML', level: 90, icon: 'html5' },
      { name: 'TypeScript', level: 88, icon: 'typescript' },
      { name: 'JavaScript', level: 88, icon: 'javascript' },
      { name: 'PHP', level: 85, icon: 'php' },
      { name: 'SQL', level: 85, icon: 'mysql' },
      { name: 'CSS', level: 85, icon: 'css' },
      { name: 'Dart', level: 80, icon: 'dart' },
      { name: 'C++', level: 65, icon: 'cplusplus' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Designing APIs, domain models and the server-side logic behind them.',
    icon: 'Server',
    skills: [
      { name: 'REST APIs', level: 90, icon: 'swagger' },
      { name: 'Spring Boot', level: 88, icon: 'springboot' },
      { name: 'Laravel', level: 85, icon: 'laravel' },
      { name: 'Spring Security (JWT)', level: 82, icon: 'springsecurity' },
      { name: 'JPA / Hibernate', level: 82, icon: 'hibernate' },
      { name: 'GraphQL', level: 75, icon: 'graphql' },
      { name: 'WebSocket', level: 75, icon: 'socketdotio' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building responsive, accessible interfaces for web and mobile.',
    icon: 'Layers',
    skills: [
      { name: 'React', level: 90, icon: 'react' },
      { name: 'TailwindCSS', level: 88, icon: 'tailwindcss' },
      { name: 'Vite', level: 85, icon: 'vite' },
      { name: 'Flutter', level: 82, icon: 'flutter' },
      { name: 'React Query', level: 80, icon: 'reactquery' },
      { name: 'Vue.js', level: 70, icon: 'vuedotjs' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases & Caching',
    description: 'Modelling, querying and caching data at the persistence layer.',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 85, icon: 'mysql' },
      { name: 'Firebase', level: 80, icon: 'firebase' },
      { name: 'Redis', level: 72, icon: 'redis' },
      { name: 'MongoDB', level: 70, icon: 'mongodb' },
      { name: 'Liquibase', level: 68, icon: 'liquibase' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    description: 'Containerising, automating and shipping software reliably.',
    icon: 'Cloud',
    skills: [
      { name: 'Docker', level: 78, icon: 'docker' },
      { name: 'Maven', level: 78, icon: 'apachemaven' },
      { name: 'GitHub Actions', level: 75, icon: 'githubactions' },
      { name: 'AWS S3', level: 70, icon: 'aws' },
      { name: 'SonarQube', level: 70, icon: 'sonarqubeserver' },
      { name: 'Jenkins', level: 62, icon: 'jenkins' },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    description: 'Unit, integration and end-to-end coverage that catches regressions early.',
    icon: 'FlaskConical',
    skills: [
      { name: 'JUnit', level: 80, icon: 'junit5' },
      { name: 'Vitest', level: 72, icon: 'vitest' },
      { name: 'Playwright', level: 70, icon: 'playwright' },
      { name: 'Testcontainers', level: 70, fallbackIcon: 'Container' },
      { name: 'Katalon Studio', level: 65, fallbackIcon: 'TestTubeDiagonal' },
    ],
  },
  {
    id: 'practices',
    label: 'Design & Practices',
    description: 'How I plan, collaborate and keep a codebase maintainable.',
    icon: 'Palette',
    skills: [
      { name: 'Git', level: 88, icon: 'git' },
      { name: 'Agile / Scrum', level: 82, fallbackIcon: 'Target' },
      { name: 'Jira', level: 80, icon: 'jira' },
      { name: 'Figma', level: 78, icon: 'figma' },
      { name: 'UI/UX Design', level: 75, fallbackIcon: 'Palette' },
      { name: 'Modular Architecture', level: 80, fallbackIcon: 'Boxes' },
    ],
  },
]

/** Highest-rated skills, used for the compact preview on the home page. */
export const featuredSkills = skillCategories
  .flatMap((category) => category.skills)
  .sort((a, b) => b.level - a.level)
  .slice(0, 8)

export const totalSkillCount = skillCategories.reduce(
  (total, category) => total + category.skills.length,
  0,
)
