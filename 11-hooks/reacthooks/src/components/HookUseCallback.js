import React, { useCallback, useState } from 'react'
import List from './List'

const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)

    //o hook faz que a função execute novamente somente quando for necessário
    const getItems = useCallback(() => {
        return ['a', 'b', 'c']
    }, [])

    return (
        <div>
            <hr />
            <h2>useCallback</h2>
            <List getItems={getItems} />
            <button onClick={() => setCounter(counter + 1)}>Alterar</button>
            <p>Counter: {counter}</p>
        </div>
    )
}

export default HookUseCallback