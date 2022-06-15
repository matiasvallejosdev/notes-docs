import React from 'react'
import styles from './Nav.module.css'

function Nav({ children }) {
  return (
    <nav className={styles.nav}>{children}</nav>
  )
}

export default Nav