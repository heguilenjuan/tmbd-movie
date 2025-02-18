import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroBox}>
      <video autoPlay muted loop className={styles.heroVideo}>  
        
      </video>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
    
      </div>
    </div>
  )
}

export default Hero