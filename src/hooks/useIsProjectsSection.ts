import { useLocation } from 'react-router'

// "Projects" covers the grid at / and every /projects/:slug page
export function useIsProjectsSection() {
  const { pathname } = useLocation()
  return pathname === '/' || pathname.startsWith('/projects/')
}
