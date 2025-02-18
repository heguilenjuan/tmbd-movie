import React from 'react'
import Logo from '../atoms/Logo'
import SearchBar from './SearchBar'
import Link from 'next/link'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.lista}>
        <button className={styles.btnNav} >Home</button>
        <button className={styles.btnNav} >Tv Show</button>
        <button className={styles.btnNav} >Series</button>
        <button className={styles.btnNav} >Peliculas</button>

      </div>

      <SearchBar />

    </nav>
  )
}

export default Navbar