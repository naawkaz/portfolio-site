import { createBrowserRouter, redirect } from 'react-router'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: HomePage },
      // The grid lives at "/", so /projects only redirects there
      { path: '/projects', loader: () => redirect('/') },
      { path: '/projects/:slug', Component: ProjectPage },
      { path: '/about', Component: AboutPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
