import React from 'react'

function Challenge() {

    const firstValue = 2
    const secondValue = 4
    const sum = (firstValue, secondValue) => firstValue + secondValue

    return (
        <div>
            <p>Primeiro valor: {firstValue}</p>
            <p>Segundo valor: {secondValue}</p>
            <button onClick={() => console.log(sum(firstValue, secondValue))}>Somar</button>
            <p>Veja o resultado no console!</p>
        </div>
    )
}

export default Challenge