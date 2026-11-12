import ProjectTile from '../../components/ProjectTile/ProjectTile'
import { projects } from '../../content/projects'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <title>Ahmed Zakwaan</title>
      <h1 className={styles.hero}>
        Hello! I am <span className={styles.name}>Zakwaan</span>, a Software Engineering graduate building
        full stack and cloud solutions
      </h1>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className={styles.label}>
          Projects
        </h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
