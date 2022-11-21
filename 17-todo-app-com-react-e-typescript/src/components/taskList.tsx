import styles from "./taskList.module.css"

import { ITask } from "../interfaces/Task"

interface Props {
    taskList: ITask[]
    handleDelete(id: number): void
}

export function TaskList({ taskList, handleDelete }: Props) {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map(task => (
                    <div key={task.id} className={styles.task}>
                        <div className={styles.details}>
                            <h4>{task.title}</h4>
                            <p>Dificuldade: {task.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            <i className="bi bi-pencil"></i>
                            <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
                        </div>
                    </div>
                ))
            ) : (
                <span>Não temos tarefas</span>
            )}
        </>
    )
}