import { Link, useParams } from 'react-router'
import Button from '../../components/Button/Button'
import Chip from '../../components/Chip/Chip'
import ArrowLeftIcon from '../../components/icons/ArrowLeftIcon'
import ExternalIcon from '../../components/icons/ExternalIcon'
import GitHubIcon from '../../components/icons/GitHubIcon'
import { findProject } from '../../content/projects'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import styles from './ProjectPage.module.css'

function ProjectPage() {
  const { slug } = useParams()
  const project = findProject(slug)

  // CloudFront serves index.html for every path, so unknown slugs land here
  if (!project) return <NotFoundPage />

  return (
    <article>
      <title>{`${project.title} · Ahmed Zakwaan`}</title>
      <Link to="/" className={styles.back}>
        <ArrowLeftIcon /> Projects
      </Link>

      <div className={styles.layout}>
        <div className={styles.info}>
          {project.thumbnail ? (
            <img src={project.thumbnail} alt="" className={styles.image} />
          ) : (
            <div className={`${styles.image} ${styles.placeholder}`} aria-hidden="true">
              {project.title.charAt(0)}
            </div>
          )}

          <div className={styles.chips}>
            {project.categories.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>

          <h1 className={styles.title}>{project.title}</h1>

          {project.role && <p className={styles.role}>Role: {project.role}</p>}

          <p className={styles.description}>{project.description}</p>

          <div className={styles.actions}>
            {project.live && (
              <Button href={project.live} external size='sm'>
                <ExternalIcon size={16} /> Live
              </Button>
            )}
            {project.github && (
              <Button href={project.github} variant="outline" external size='sm'>
                <GitHubIcon size={18} /> GitHub
              </Button>
            )}
          </div>
        </div>

        <section className={styles.panel} aria-labelledby="built-heading">
          <h2 id="built-heading">How it was built</h2>

          <ul className={styles.stack} aria-label="Tech stack">
            {project.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          {project.diagram && (
            <img
              src={project.diagram}
              alt={`Architecture diagram for ${project.title}`}
              className={styles.diagram}
            />
          )}

          {project.decisions.length > 0 && (
            <>
              <h3 className={styles.cardHeading}>Decisions</h3>
              <ol className={styles.decisions}>
                {project.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ol>
            </>
          )}
        </section>
      </div>
    </article>
  )
}

export default ProjectPage
