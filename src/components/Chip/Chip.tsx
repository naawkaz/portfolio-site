import type { ReactNode } from 'react'
import styles from './Chip.module.css'

type ChipProps = {
  variant?: 'tint' | 'overlay' // overlay sits on top of images
  children: ReactNode
}

function Chip({ variant = 'tint', children }: ChipProps) {
  return <span className={`${styles.chip} ${styles[variant]}`}>{children}</span>
}

export default Chip
