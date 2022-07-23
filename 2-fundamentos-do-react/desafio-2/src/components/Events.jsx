import React from 'react'

function Events() {

    const handleMyEvent = e => {
        console.log(e);

        console.log("Ativou evento")
    }

    const renderSomething = x => {
        if (x) {
            return <p>Posso renderizar isso!</p>
        } else {
            return <p>Também posso renderizar isso!</p>
        }
    }

    return (
        <div>
            <div>
                {/* Funções que não são bem pequenas devem ser separadas. Pode se seguir o padrão "handle"*/}
                <button onClick={handleMyEvent} >Clique aqui</button>
            </div>
            <div>
                {/* Se a função do evento for muito simples pode ser feita inline. */}
                <button onClick={() => { console.log("Clicou!") }}>Cique aqui também!</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events