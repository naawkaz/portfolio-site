import ProjectTile from '../../components/ProjectTile/ProjectTile'
import { projects } from '../../content/projects'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <h1 className={styles.hero}>
        Hello! I am Zakwaan, a Software Engineering graduate building full stack and cloud solutions
      </h1>
      <section className={styles.grid} aria-label="Projects">
        {projects.map((p) => (
          <ProjectTile key={p.slug} project={p} />
        ))}
      </section>
    </>
  )
}

export default HomePage
