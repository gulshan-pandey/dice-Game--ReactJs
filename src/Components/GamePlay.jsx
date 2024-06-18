import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDIce from './RoleDIce'
import { Button, OutlineButton } from '../styled/Button'
import Rule from './Rule'

const GamePlay = () => {
  const [score,setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,seterror] = useState();
  const [showRules,setShowRules]  = useState(false)

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };


  const roleDice = () => {
    if(!selectedNumber){
      seterror("You have not selected any number");
      return;
    }

    
    const randomNumber = generateRandomNumber(1,7);
    

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber){
      setscore((prev)=> prev + randomNumber);

    }else{
      setscore((prev) => prev -2);
    }

    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setscore(0);
  }


  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector error = {error} seterror={seterror} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDIce currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules((prev)=> !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rule/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`

   padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
  }

`
