import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
  external?: boolean // Opens in a new tab
  download?: boolean
  children: ReactNode
}

// Every button on the site goes somewhere (GitHub, Live, CV), so it renders an <a>.
// Width is left to the parent, so pages decide where buttons go full width.
function Button({ href, variant = 'primary', size = 'md', external, download, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download || undefined}
    >
      {children}
    </a>
  )
}

export default Button
