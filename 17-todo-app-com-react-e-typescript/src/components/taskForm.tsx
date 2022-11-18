import styles from "./taskForm.module.css"

import { ITask } from "../interfaces/Task"

import { ChangeEvent, useState } from "react"

interface Props {
    btnText: string
}

export function TaskForm({ btnText }: Props) {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = () => {

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
        console.log(title, difficulty)
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa" onChange={handleChange} />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}