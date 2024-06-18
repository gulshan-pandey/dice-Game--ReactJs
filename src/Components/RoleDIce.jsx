import styled from "styled-components"

const RoleDIce = ({currentDice,roleDice}) => {

  

  
    
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
       <img src={`/images/dice/dice${currentDice}.png`} alt="dice 1" /> 
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDIce

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 40px;

.dice{
   cursor: pointer;
}

p{
    font-size: 24px;
}
    
`
