import { Link, NavLink } from 'react-router'
import { links } from '../../content/about'
import { useIsProjectsSection } from '../../hooks/useIsProjectsSection'
import Button from '../Button/Button'
import GitHubIcon from '../icons/GitHubIcon'
import LinkedInIcon from '../icons/LinkedInIcon'
import styles from './TopBar.module.css'

function TopBar() {
  const onProjects = useIsProjectsSection()

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.name}>
          Ahmed Zakwaan
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <NavLink to="/" className={onProjects ? styles.active : styles.link}>
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            About
          </NavLink>
        </nav>

        <div className={styles.end}>
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" className={styles.icon} aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          )}
          <a href={links.github} target="_blank" rel="noreferrer" className={styles.icon} aria-label="GitHub">
            <GitHubIcon />
          </a>
          {links.email && (
            <span className={styles.contact}>
              <Button href={`mailto:${links.email}`} size="sm">
                Contact
              </Button>
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopBar
