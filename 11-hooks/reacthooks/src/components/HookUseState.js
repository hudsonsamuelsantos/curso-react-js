import { useState } from "react"

const HookUseState = () => {

    let name = 'João'

    const [stateName, setStateName] = useState('Hudson')
    const [age, setAge] = useState('?')

    const changeName = () => {
        name = 'Santos'
        setStateName('Santos')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

    return (
        <div>
            <h2>Use State</h2>
            <p>Variável: {name}</p>
            <p>Estado: {stateName}</p>
            <button onClick={changeName}>Mudar nome</button>
            <p>Digite sua idade:</p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setAge(e.target.value)} value={age} />
                <input type="submit" value="Enviar" />
            </form>
            <p>Sua idade é : {age}</p>
        </div>
    )
}

export default HookUseState