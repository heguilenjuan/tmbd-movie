import React from 'react'
import Logo from '../atoms/Logo'
import SearchBar from './SearchBar'
import Link from 'next/link'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <ul className={styles.lista}>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Tv Show</Link>
        <Link href={"/"}>Series</Link>
        <Link href={"/"}>Peliculas</Link>
      </ul>

      <SearchBar />

    </nav>
  )
}

export default Navbar