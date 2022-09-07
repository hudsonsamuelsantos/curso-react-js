import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    const [number, setNumber] = useState(1)
    const [anotherNumber, setAnotherNumber] = useState(0)

    //sem dependencias ele executa quando o componente é renderizado
    useEffect(() => console.log('Executei!'))

    //com dependencias vazias executa só uma vez, quando o componente é renderizado
    useEffect(() => console.log('Executei apenas uma vez!'), [])

    //com dependencias, executa sempre que o valor da dependencia for alterado
    useEffect(() => console.log('Another number foi alterado!'), [anotherNumber])

    const increment = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <hr />
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={increment}>+1</button>
            <p>Another number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>+1</button>
        </div>
    )
}

export default HookUseEffect