import React from 'react'

function Container({ children }) {
    return (
        <div>
            <h1>Título do container</h1>
            {children}
        </div>
    )
}

export default Container