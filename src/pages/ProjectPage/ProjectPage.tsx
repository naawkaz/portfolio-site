import { Link, useParams } from 'react-router'
import Button from '../../components/Button/Button'
import Chip from '../../components/Chip/Chip'
import ArrowLeftIcon from '../../components/icons/ArrowLeftIcon'
import { findProject } from '../../content/projects'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProjectPage.module.css'

function ProjectPage() {
  const { slug } = useParams()
  const project = findProject(slug)

  // CloudFront serves index.html for every path, so unknown slugs land here
  if (!project) return <NotFoundPage />

  return (
    <article className={styles.page}>
      <Link to="/" className={styles.back}>
        <ArrowLeftIcon /> Projects
      </Link>

      {project.thumbnail ? (
        <img src={project.thumbnail} alt="" className={styles.image} />
      ) : (
        <div className={styles.image} />
      )}

      <div className={styles.chips}>
        {project.categories.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>

      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.role && <p className={styles.role}>{project.role}</p>}

      <div className={styles.actions}>
        {project.live && (
          <Button href={project.live} external>
            Live
          </Button>
        )}
        {project.github && (
          <Button href={project.github} variant="outline" external>
            GitHub
          </Button>
        )}
      </div>

      <section className={styles.panel}>
        <h2>How it was built</h2>
        <p className={styles.stack}>{project.stack.join(' · ')}</p>
        {project.diagram && (
          <img src={project.diagram} alt={`Architecture diagram for ${project.title}`} />
        )}
        {project.decisions.length > 0 && (
          <>
            <h3>Key decisions</h3>
            <ul>
              {project.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </article>
  )
}

export default ProjectPage
