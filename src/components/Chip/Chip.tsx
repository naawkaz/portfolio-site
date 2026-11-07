import type { ReactNode } from 'react'
import styles from './Chip.module.css'

function Chip({ children }: { children: ReactNode }) {
  return <span className={styles.chip}>{children}</span>
}

export default Chip
