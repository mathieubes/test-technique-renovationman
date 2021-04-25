import React from 'react'

import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

import styles from './App.module.css'

function App() {
    return ( 
        <div>
            <Navbar />
            <div className={styles.darkBackgroundCover}></div>
            
            <div className={styles.mainContainer}>
                <TodoList />
            </div>
        </div>
    )
}

export default App