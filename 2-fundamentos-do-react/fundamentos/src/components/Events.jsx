import React from 'react'

function Events() {
    const handleMyEvent = e => {
        console.log(e);

        console.log("Ativou evento")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique aqui</button>
            </div>
        </div>
    )
}

export default Events