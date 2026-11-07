import { Link, NavLink } from 'react-router'
import { useIsProjectsSection } from '../../hooks/useIsProjectsSection'
import styles from './TopBar.module.css'

function TopBar() {
  const onProjects = useIsProjectsSection()

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.name}>
          Zakwaan
        </Link>
        <nav className={styles.nav} aria-label="Main">
          <NavLink to="/" className={onProjects ? styles.active : styles.link}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default TopBar
