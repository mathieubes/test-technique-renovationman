import React from 'react'

import toodoo from '../assets/toodoo.svg'

import styles from './Navbar.module.css'

function Navbar () {
    return (
        <nav className={styles.navbar}>
            <img src={toodoo} alt="Toodoo icon"/>
        </nav>
    )
}

export default Navbar