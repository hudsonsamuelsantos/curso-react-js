import React from 'react'

function Events() {
    return (
        <div>
            <div>
                <button onClick={(e) => {
                    console.log(e);

                    console.log("Ativou evento")
                }} >Clique aqui</button>
            </div>
        </div>
    )
}

export default Events