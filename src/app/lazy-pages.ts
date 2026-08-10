import { lazy } from 'react'

/**
 * Code-split page components.
 *
 * Kept separate from `router.tsx` so each file has a single kind of export —
 * this one only components, the router only the router object. Mixing the two
 * breaks React Fast Refresh (`react-refresh/only-export-components`).
 */
export const HomePage = lazy(() => import('@/pages/HomePage'))
export const AboutPage = lazy(() => import('@/pages/AboutPage'))
export const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'))
export const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
export const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
export const SkillsPage = lazy(() => import('@/pages/SkillsPage'))
export const ContactPage = lazy(() => import('@/pages/ContactPage'))
export const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))
