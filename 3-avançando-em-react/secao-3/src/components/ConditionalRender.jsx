import React, { useState } from 'react'

function ConditionalRender() {
    const [x] = useState(true)

    const [name, setName] = useState("")

    return (
        <div>
            <h2>Isso será exibido?</h2>
            {x && <p>Se for true, sim!</p>}

            <h2>If ternário</h2>
            {name === "Hudson"
                ? (<p>O nome é Hudson</p>)
                : (<p>Nome não encontrado!</p>)
            }

            <button onClick={() => setName("Hudson")}>Clique!</button>
        </div>
    )
}

export default ConditionalRender