import "./StartScreen.css"

function StartScreen({ startGame, goToGame }) {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para jogar!</p>
            <button onClick={startGame && goToGame}>Começar o jogo</button>
        </div>
    )
}

export default StartScreen