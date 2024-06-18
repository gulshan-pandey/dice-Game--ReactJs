import styled from "styled-components"
import { Button } from "../styled/Button"

const StartPage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartPage

const Container = styled.div`
   max-width: 1180px;
   display: flex;
   margin: 0 auto;
   height: 100vh;
   align-items: center;
  justify-content: space-between;

   .content{
    h1 {
      font-size: 96px;
    }
   }

`