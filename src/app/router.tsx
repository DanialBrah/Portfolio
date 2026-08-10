import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectDetailPage,
  ProjectsPage,
  SkillsPage,
} from './lazy-pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:slug', element: <ProjectDetailPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
