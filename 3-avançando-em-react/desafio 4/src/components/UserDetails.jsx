import React from 'react'

function UserDetails({ name, age }) {
    return (
        <div>
            <h2>Usuário:</h2>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            {age >= 18 && (<p>Pode tirar carteira de habilitação!</p>)}
        </div>
    )
}

export default UserDetails