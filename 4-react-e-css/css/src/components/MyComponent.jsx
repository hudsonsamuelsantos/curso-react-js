import React from 'react'

import './MyComponent.css'

function MyComponent() {
    return (
        <div>
            <h2>CSS de componente</h2>
            <p>Parágrafo do componente</p>
            <p className='my-comp-p'>Esse também é do componente</p>
        </div>
    )
}

export default MyComponent