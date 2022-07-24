import React, { useState } from 'react'

function ManageData() {

    const [value, setValue] = useState(10)

    return (
        <div>
            <p>Valor: {value}</p>
            <button onClick={() => setValue(value + 10)}>Mudar o state</button>
        </div>
    )
}

export default ManageData