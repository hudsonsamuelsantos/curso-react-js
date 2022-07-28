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
  console.log(words)

  const startGame = () => {
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
