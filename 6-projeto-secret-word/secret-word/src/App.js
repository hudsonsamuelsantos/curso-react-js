import './App.css';

import { wordsList } from './data/words'
import StartScreen from './components/StartScreen';
import { useCallback, useEffect, useState } from 'react';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "gameover" }
]

function App() {

  const guessesNumber = 3

  const [stage, setStage] = useState(stages[0].name)

  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesNumber)
  const [score, setScore] = useState(0)

  const pickWordandCategory = useCallback(() => {
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  },[words])

  const startGame = useCallback(() => {

    clearLetterStates()

    const { word, category } = pickWordandCategory()
    
    let wordLetters = word.split("")
    wordLetters = wordLetters.map(letter => letter.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
  },[pickWordandCategory])

  const goToGame = () => {
    setStage(stages[1].name)
  }

  const verifyLetter = (letter) => {
    console.log(letter)

    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters(actualGuessedLetters => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters(actualWrongLetters => [
      ...actualWrongLetters, normalizedLetter
    ])
      setGuesses(actualguesses => actualguesses -1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if (guesses <= 0) {

      clearLetterStates()

      setStage(stages[2].name)
    }
  }, [guesses])

  useEffect (() => {

    const uniqueLetters = [...new Set(letters)]

    if (guessedLetters.length === uniqueLetters.length) {

      setScore(actualScore => (actualScore + 100))

      startGame()

    }

  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(guessesNumber)

    setStage(stages[0].name)
  }

  return (
    <div className="App">
      {stage === "start" && <StartScreen startGame={startGame} goToGame={goToGame} />}
      {stage === "game" && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {stage === "gameover" && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
