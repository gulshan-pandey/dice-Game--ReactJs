
import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setGameStarted((prev) => !prev);
  };

  return (
    <div>
    {isGameStarted ? <GamePlay/> : <StartGame  toggle={toggleGamePlay}/> }
     
    </div>
  )
}

export default App
