import styles from "./modal.module.css"

import React from "react"

interface Props {
    children: React.ReactNode
}

export function Modal({ children }: Props) {
    return (
        <div id="modal">
            <div className={styles.fade}></div>

            <div className={styles.modal}>
                {children}
            </div>

        </div>
    )
}