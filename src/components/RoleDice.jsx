import React, { useState } from 'react'
import styled from "styled-components"

const RoleDice = ({currentDice,roleDice}) => {
   

 



  return (
    <DiceContainer>
        <div onClick={roleDice}> 
             <img src={`/images/dice_${currentDice}.png`} alt='dice 1'></img>
        </div>
       <p>Click On Dice To Roll</p>

    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items:center;

p{
    font-size:24px;
}
`