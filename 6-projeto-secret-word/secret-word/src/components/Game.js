import './Game.css'

function Game({ verifyLetter }) {
    return (
        <div>
            <h1>Game</h1>
            <button onClick={verifyLetter} >Verificar letra</button>
        </div>
    )
}

export default Game