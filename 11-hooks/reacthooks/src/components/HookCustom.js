import React, { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previousNumber = usePrevious(number)

    return (
        <div>
            <hr />
            <h2>customHook</h2>
            <p>Atual: {number}</p>
            <p>Anterior: {previousNumber}</p>
            <button onClick={() => setNumber(Math.random())}>Alterar</button>
        </div>
    )
}

export default HookCustom