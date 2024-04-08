import StartGame from './components/StartGame'

import './App.css'
import { useState } from 'react'
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted , setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev)
  }

  return (
    <div>

{
  isGameStarted ? <GamePlay></GamePlay> :<StartGame 
  toggle = {toggleGamePlay}
  ></StartGame>
}


    </div>
  )
}

export default App
