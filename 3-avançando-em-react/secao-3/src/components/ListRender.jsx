import React, { useState } from 'react'

const ListRender = () => {

    const [users, setUsers] = useState([
        { name: "Hudson", id: 1 },
        { name: "Samuel", id: 2 },
        { name: "Santos", id: 3 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers(prevUsers => {
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {/*Pra retornar JSX nem uma função envolva-o em () */}
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Deletar user aleatório</button>
        </div>
    )
}

export default ListRender