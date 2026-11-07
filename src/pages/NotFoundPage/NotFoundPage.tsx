import { Link } from 'react-router'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <h1>Page not found</h1>
      <p>That page doesn't exist.</p>
      <Link to="/">Back to projects</Link>
    </div>
  )
}

export default NotFoundPage
