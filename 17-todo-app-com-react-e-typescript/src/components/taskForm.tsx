import styles from "./taskForm.module.css"

import { ITask } from "../interfaces/Task"

import { ChangeEvent, FormEvent, SetStateAction, useState } from "react"

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<SetStateAction<ITask[]>>
}

export function TaskForm({ btnText, taskList, setTaskList }: Props) {
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const id = (Math.floor(Math.random() * 1000))

        const newTask: ITask = { id, title, difficulty }

        setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Título da tarefa"
                    onChange={handleChange}
                    value={title}
                />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input
                    type="text"
                    name="difficulty"
                    placeholder="Dificuldade da tarefa"
                    onChange={handleChange}
                    value={difficulty}
                />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}