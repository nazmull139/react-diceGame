import React, { useState } from 'react'
import styled from "styled-components"
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './styled/button';
import Rules from './Rules';

const GamePlay = () => {
    const [score,setScore] = useState(0);
    const [selectedNumber,setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError]=useState("");
    const [showRules , setShowRules]= useState(false);

    const generateRandomNumber = (min , max) => {

        return Math.floor(Math.random()*(max-min)+min) ;
    }

    const roleDice = () =>{
        if(!selectedNumber){
                setError("You haven't selected any nymbers")
            return;
        }
       
      const randomNumber =  generateRandomNumber(1,7);
      setCurrentDice((prev)=> randomNumber);
        
      if (selectedNumber == randomNumber){

        setScore((prev)=> prev+randomNumber)

      }else{
        setScore((prev)=> prev-2)
      }
      setSelectedNumber(undefined);
    };
     const resetScore = () => {
          setScore(0);
        }


  return (
    <MainContainer>  
        <div className='top_section'>

             <TotalScore 
             score={score}
             ></TotalScore>


        <NumberSelector 
        error={error}
        setError={setError}
                selectedNumber={selectedNumber}
                setSelectedNumber = {setSelectedNumber}
        ></NumberSelector>

        </div>

            <RoleDice 
                currentDice = {currentDice}
                roleDice = {roleDice}
            
            ></RoleDice>
            <div className='btns'>
              <OutlineButton onClick={resetScore}>Reset Game</OutlineButton>
          <Button onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules?"Hide":"See"} Rules</Button>
            </div>


          { showRules && <Rules></Rules>}
        
        </MainContainer>

  
  );
  
   
};

export default GamePlay;
const MainContainer = styled.main`
margin-top:70px;
.top_section{
   
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.btns{
  margin-top:40px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
}
`;


