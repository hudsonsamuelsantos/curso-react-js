import React from 'react'
//Padrão para import de css module
import styles from "./Title.module.css"

function Title() {
    return (
        <h2 className={styles.my_title}>Título com CSS Modules</h2>
    )
}

export default Title