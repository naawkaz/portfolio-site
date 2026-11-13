import ProjectTile from '../../components/ProjectTile/ProjectTile'
import { projects } from '../../content/projects'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <title>Ahmed Zakwaan</title>
      <h1 className={styles.hero}>
        <span className={styles.name}>hello.</span> I make fullstack and cloud applications
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
