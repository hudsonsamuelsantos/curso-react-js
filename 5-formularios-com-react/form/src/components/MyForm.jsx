import "./MyForm.css"

import React, { useState } from 'react'

function MyForm({ user }) {

    // Input controlado value === state
    const [name, setName] = useState(user ? user.name : null)
    const [email, setEmail] = useState(user ? user.email : null)
    const [bio, setBio] = useState("")
    const [role, setRole] = useState(user ? user.role : null)

    const handleName = e => {
        setName(e.target.value)
    }

    // preventDefault tira comportamento padrão de recarregar a página
    const handleSubmit = e => {
        e.preventDefault()
        console.log("Eviando formulário")
        console.log(name, email, bio, role)

        // Validação aqui
        // Envio aqui

        // Reset
        setName("")
        setEmail("")
        setBio("")
    }
    //console.log(name)
    //console.log(email)

    return (
        <div>
            {/* Não usa action */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />
                </div>

                {/* Label envolvendo input não precisa do for */}
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} value={email} />
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Digite uma descrição sobre você" value={bio} onChange={e => setBio(e.target.value)}></textarea>
                </label>

                <label>
                    <span>Usuário:</span>
                    <select name="role" onChange={e => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="admin">Administrador</option>
                        <option value="editor">Editor</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm