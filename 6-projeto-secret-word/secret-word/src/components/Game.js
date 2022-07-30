import './Game.css'

function Game({ verifyLetter }) {
    return (
        <div className='game'>
            <div className='points'>
                <span>Pontuação: 000</span>
            </div>
            <h1>Descubra a palavra:</h1>
            <h2 className='tip'>
                Dica: <span>Dica...</span> 
            </h2>
            <div className='wordContainer'>
                <span className='letter'>A</span>
                <span className="blankSquare"></span>
            </div>
            <div className='letterCointainer'>
                <p>Tente descobrir uma letra da palavra:</p>
            </div>
            <form>
                <input type="text" name='letter' maxLength='1' required />
                <button onClick={verifyLetter} >Jogar!</button>
            </form>
        </div>
    )
}

export default Game