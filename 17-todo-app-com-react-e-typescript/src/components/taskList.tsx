import { ITask } from "../interfaces/Task"

interface Props {
    taskList: ITask[]
}

export function TaskList({ taskList }: Props) {
    return (
        <>
            {taskList.length > 0 ? (
                taskList.map(task => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                    </div>
                ))
            ) : (
                <span>Não temos tarefas</span>
            )}
        </>
    )
}