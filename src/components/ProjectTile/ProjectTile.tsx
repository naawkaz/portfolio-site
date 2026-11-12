import { Link } from 'react-router'
import type { Project } from '../../content/projects'
import Chip from '../Chip/Chip'
import styles from './ProjectTile.module.css'

function ProjectTile({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.tile}>
      <div className={styles.media}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt="" className={styles.thumb} />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            {project.title.charAt(0)}
          </div>
        )}
        <div className={styles.chips}>
          {project.categories.map((c) => (
            <Chip key={c} variant="overlay">
              {c}
            </Chip>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.blurb}>{project.blurb}</p>
      </div>
    </Link>
  )
}

export default ProjectTile
