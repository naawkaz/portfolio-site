import { NavLink } from 'react-router'
import { useIsProjectsSection } from '../../hooks/useIsProjectsSection'
import GridIcon from '../icons/GridIcon'
import PersonIcon from '../icons/PersonIcon'
import styles from './TabBar.module.css'

// Mobile-only bottom navigation. Hidden from 768px up, where TopBar shows the links
function TabBar() {
  const onProjects = useIsProjectsSection()

  return (
    <nav className={styles.bar} aria-label="Main">
      <NavLink to="/" className={onProjects ? styles.active : styles.tab}>
        <GridIcon />
        Projects
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.tab)}>
        <PersonIcon />
        About
      </NavLink>
    </nav>
  )
}

export default TabBar
