import React from 'react'

function ExecuteFunction({ myFunction }) {
    return (
        <div>
            <button onClick={myFunction}>Clique para executar função!</button>
        </div>
    )
}

export default ExecuteFunction