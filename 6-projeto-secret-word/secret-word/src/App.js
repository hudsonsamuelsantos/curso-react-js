import './App.css';

import { wordsList } from './data/words'
import StartScreen from './components/StartScreen';
import { useState } from 'react';
import Game from './components/Game';
import GameOver from './components/GameOver';

function App() {

  const stages = [
    { id: 1, name: "start" },
    { id: 2, name: "game" },
    { id: 3, name: "gameover" }
  ]

  const [stage, setStage] = useState(stages[0].name)

  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordandCategory = () => {
    const categories = Object.keys(words)
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category }
  }

  const startGame = () => {
    const { word, category } = pickWordandCategory()
    
    let wordLetters = word.split("")
    wordLetters = wordLetters.map(letter => letter.toLowerCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setStage(stages[1].name)
  }

  const verifyLetter = () => {
    setStage(stages[2].name)
  }

  const retry = () => {
    setStage(stages[0].name)
  }

  return (
    <div className="App">
      {stage === "start" && <StartScreen startGame={startGame} />}
      {stage === "game" && <Game verifyLetter={verifyLetter} />}
      {stage === "gameover" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
