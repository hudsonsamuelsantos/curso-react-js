import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTasks = [
        { id: 1, text: 'Exemplo de tarefa 1' },
        { id: 2, text: 'Exemplo de tarefa 2' }
    ]

    const tasksReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText('')

                return [...state, newTask]

            case 'DELETE':
                return state.filter(task => task.id !== action.id)

            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState('')
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: 'ADD' })
    }

    const removeTask = id => {
        dispatchTasks({ type: 'DELETE', id })
    }

    return (
        <div>
            <hr />
            <h2>useReducer</h2>
            <p>Número : {number}</p>
            <button onClick={dispatch}>Gerar número</button>
            <h3>Tarefas:</h3>
            <ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            {task.text}
                            <button onClick={() => removeTask(task.id)}>Excluir</button>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setTaskText(e.target.value)}
                    value={taskText}
                />
                <input type="submit" value="Criar tarefa" />
            </form>
        </div>
    )
}

export default HookUseReducer