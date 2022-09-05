import { useState } from "react"

const HookUseState = () => {

    let name = 'João'

    const [stateName, setStateName] = useState('Hudson')

    const changeName = () => {
        name = 'Santos'
        setStateName('Santos')
    }

    return (
        <div>
            <h2>Use State</h2>
            <p>Variável: {name}</p>
            <p>Estado: {stateName}</p>
            <button onClick={changeName}>Mudar nome</button>
        </div>
    )
}

export default HookUseState