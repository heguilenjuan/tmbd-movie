'use client'
import React, { useState } from 'react'

import Icon from '../atoms/Icon'
import styles from './SearchBar.module.css'


const SearchBar = () => {
    const [inputText, setInputText] = useState<string>("")

    return (
        <div className={styles.inputWrapper}>
            <Icon type='search' />
            <input placeholder='Escribi para buscar' className={styles.inputSearch} value={inputText} onChange={(e) => setInputText(e.target.value)} />
        </div>
    )
}

export default SearchBar