import { useRef, useState } from 'react'
import './Game.css'

function Game({ 
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
}) {
    
    const [inputLetter, setInputLetter] = useState('')
    const letterInputRef = useRef(null)
    
    const handleSubmit = e => {
        e.preventDefault()

        verifyLetter(inputLetter)

        setInputLetter('')

        letterInputRef.current.focus()
    }

    return (
        <div className='game'>
            <div className='points'>
                <span>Pontuação: {score}</span>
            </div>
            <h1>Descubra a palavra:</h1>
            <h2 className='tip'>
                Dica: <span>{pickedCategory}</span> 
            </h2>
            <p>Você ainda tem {guesses} tentativas</p>
            
            <div className='wordContainer'>
                {letters.map((letter, i) =>
                    guessedLetters.includes(letter) ? (
                        <span className='letter' key={i}>{letter}</span>
                    ) : (
                        <span className="blankSquare" key={i}></span>
                    )
                )}
            </div>
            <div className='letterContainer'>
                <p>Tente descobrir uma letra da palavra:</p>
                <form>
                <input 
                    type="text" 
                    name='letter' 
                    maxLength='1' 
                    required
                    onChange={e => setInputLetter(e.target.value)} 
                    value={inputLetter}
                    ref={letterInputRef}
                />
                <button onClick={handleSubmit} >Jogar!</button>
            </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                {wrongLetters.map((letter, i) => (
                    <span key={i}>{letter},</span>
                ))}
            </div>
        </div>
    )
}

export default Game