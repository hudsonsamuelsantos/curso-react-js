import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {

    const [number, setNumber] = useState(0)

    /*o hook faz com que a variável fique atrelada a uma referência e não a um valor,
    evitando assim recarregar esse dado a cada nova renderização*/
    const premiumNumbers = useMemo(() => {
        return ['1', '100', '1000']
    }, [])

    useEffect(() => { console.log('premiumNumbers foi alterado') }, [premiumNumbers])

    return (
        <div>
            <hr />
            <h2>useMemo</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ? <p>Acertou!</p> : ''}
        </div>
    )
}

export default HookUseMemo