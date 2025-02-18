import React from 'react'
import Icon from '../atoms/Icon'
import styles from './SearchBar.module.css'
const SearchBar = () => {
  return (
    <div className={styles.boxSearch}>
        <input type="text"  className={styles.inputSearch}/>
        <Icon type='search'/>
    </div>
  )
}

export default SearchBar