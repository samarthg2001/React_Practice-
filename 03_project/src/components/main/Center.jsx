import React, { useState } from 'react'
import "../main/Center.Module.css"
import  P1 from "../../assets/dice_1.png"
import  P2 from "../../assets/dice_2.png"
import  P3 from "../../assets/dice_3.png"
import  P4 from "../../assets/dice_4.png"
import  P5 from "../../assets/dice_5.png"
import  P6 from "../../assets/dice_6.png"
import Button from "../button/Button.jsx"
function Center() {
  
  const [currentDice,setcurrentDice]=useState(P1)
  const [value,setvalue]=useState(false)
  const allpicture=[P1,P2,P3,P4,P5,P6]
  const show=()=>{
    setvalue(!value)
   }
  const rules=!value?"Show rules":" hide rules"
const genarate_random_number=()=>{
  let index=Math.floor(Math.random()*6);
  setcurrentDice(allpicture[index])
  console.log(index);
}


  return (
    <div className='center-div'>
      <div className='main-dev'>
      <div className='contains'>
      <img src={currentDice} alt="" srcSet=""  onClick={genarate_random_number}/ >
      <p style={{fontSize:"1.5em",fontWeight:"bold"}}>Click on Dice to Roll</p>
      </div>
      <div className='btn-components'>
        <Button name={"Reset Score"} bgcolor={"white"} fontColor={"black"}/>
        <br />
          <Button name={rules } onClick={show}/>
        </div>
      </div>

      <div className='rules' style={{display:value?"inline":"none"}}>
        <h1> How to play Dice game</h1>
        <div className="rules-guideline" id='rules'>
<p>select any number</p>
<p>Click on dice image</p>
<p>after click on dice if selected number is equal to dice number you will ger some point as dice</p>
     <p>if you get wrong guess then 2 point will be dedcuted</p>
        </div>
      
      </div>


    </div>
  )
}

export default Center

