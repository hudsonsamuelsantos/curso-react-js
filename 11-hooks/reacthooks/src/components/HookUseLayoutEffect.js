import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {

    const [name, setName] = useState('Algum nome')

    useEffect(() => {
        console.log('2')
        setName('Nome novo')
    }, [])

    //o hook faz algo executar antes de qualquer renderização
    useLayoutEffect(() => {
        console.log('1')
        setName('Outro nome')
    }, [])

    return (
        <div>
            <hr />
            <h2>useLayoutEffect</h2>
            <p>Nome: {name}</p>
        </div>
    )
}

export default HookUseLayoutEffect