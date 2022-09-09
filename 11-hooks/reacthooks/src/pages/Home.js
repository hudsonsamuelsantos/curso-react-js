import React, { useContext } from 'react'
import HookUseCallback from '../components/HookUseCallback'
import { SomeContext } from '../components/HookUseContext'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseRef from '../components/HookUseRef'
import HookUseState from '../components/HookUseState'

const Home = () => {

    const { contextValue, contextNumber } = useContext(SomeContext)

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
            <hr />
            <h2>useContext</h2>
            <p>Valor: {contextValue}</p>
            <p>Numero do contexto: {contextNumber}</p>
            <HookUseRef />
            <HookUseCallback />
        </div>
    )
}

export default Home