import { Link } from 'react-router'
import type { Project } from '../../content/projects'
import Chip from '../Chip/Chip'
import styles from './ProjectTile.module.css'

function ProjectTile({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className={styles.tile}>
      {project.thumbnail ? (
        <img src={project.thumbnail} alt="" className={styles.thumb} />
      ) : (
        <div className={styles.thumb} />
      )}
      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p className={styles.blurb}>{project.blurb}</p>
        <div className={styles.chips}>
          {project.categories.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectTile
