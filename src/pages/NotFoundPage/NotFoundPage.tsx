import Button from '../../components/Button/Button'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <title>Page not found · Ahmed Zakwaan</title>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1>Page not found</h1>
      <p>That page doesn't exist.</p>
      <Button href="/" variant="outline">
        Back to projects
      </Button>
    </div>
  )
}

export default NotFoundPage
