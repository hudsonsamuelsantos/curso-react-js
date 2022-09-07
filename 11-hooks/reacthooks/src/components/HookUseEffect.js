import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    //sem dependencias ele executa quando o componente é renderizado
    useEffect(() => console.log('Executei!'))

    const [number, setNumber] = useState(1)

    const increment = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <hr />
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default HookUseEffect