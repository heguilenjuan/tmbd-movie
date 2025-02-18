import React from 'react'

import styles from './Logo.module.css'
const Logo = () => {
  return (
    <div className={styles.boxLogo}>
      <div className={styles.logotmb}>
        TMBD
      </div>
      <div className={styles.logoMovies}>
        Movies
      </div>
      
    </div>
  )
}

export default Logo