import "./MyForm.css"

import React from 'react'

function MyForm() {
    return (
        <div>
            {/* Não usa action */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome" />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm