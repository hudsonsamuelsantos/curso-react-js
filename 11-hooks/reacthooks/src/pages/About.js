import React, { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'
import HookUseState from '../components/HookUseState'

const About = () => {

    const { contextValue, contextNumber } = useContext(SomeContext)

    return (
        <div>
            <hr />
            <h2>Valores do contexto</h2>
            <p>Valor: {contextValue}</p>
            <p>Numero do contexto: {contextNumber}</p>

        </div>
    )
}

export default About