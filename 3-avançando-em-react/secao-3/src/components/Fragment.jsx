import React from 'react'

function Fragment({ propFragment }) {
    return (
        <>
            <h2>Titulo 1</h2>
            <h3>Título 2</h3>
            <h4>{propFragment}</h4>
        </>
    )
}

export default Fragment