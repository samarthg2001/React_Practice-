import React, { useContext, useState } from 'react'
import "../main/Center.Module.css"
import  P1 from "../../assets/dice_1.png"
import  P2 from "../../assets/dice_2.png"
import  P3 from "../../assets/dice_3.png"
import  P4 from "../../assets/dice_4.png"
import  P5 from "../../assets/dice_5.png"
import  P6 from "../../assets/dice_6.png"
import { ToastContainer, toast } from 'react-toastify';
import Button from "../button/Button.jsx"
import 'react-toastify/dist/ReactToastify.css';
import { GameContext } from '../../GameProvider.jsx'

function Center() {
  const {selectNumebr,setselectNumber,updateScore,setTotalscore}=useContext(GameContext)
  const [currentDice,setcurrentDice]=useState(P1)
  const [value,setvalue]=useState(false)
  const[count,setcount]=useState(0)
  const [win,setWin]=useState(null)
  const [Loss,setLoss]=useState(null)

  const allpicture=[P1,P2,P3,P4,P5,P6]
  
  const show=()=>{
    setvalue(!value)
   }

   const reset=()=>{
    setselectNumber(0);
    setTotalscore((prev)=>0);
    setWin(null);
    setLoss(null);
    setcount((prev)=>0)
  }
   



  const rules=!value?"Show rules":" Hide rules"
  const genarate_random_number=()=>{
  if(selectNumebr==0){
    toast.error("please select the number",{autoClose:800})
  }
  else{
    setcount((pre)=>pre+1);
  let index=Math.floor(Math.random()*6);
  setcurrentDice(allpicture[index])
  console.log(index);
  let compare=index+1;
  if(compare ==selectNumebr){
      setWin((pre)=>pre+1)
    updateScore(index+1)
  }
  else{
    setLoss((pre)=>pre+1)
    updateScore(-2)
  }
}}


  return (
    <div className='center-div'>
       
       <ToastContainer />
     
      <div className='main-dev'>
      <div className='contains'>
         <img src={currentDice} alt="" srcSet=""  onClick={genarate_random_number}/ >
      <p style={{fontSize:"1.5em",fontWeight:"bold"}}>Click on Dice to Roll</p>
      </div>
      <div className='win-loss'> 
        <div className='points'><p style={{color:'green'}}>WIN:{win} </p> <p style={{color:"red"}}>LOSS: {Loss} </p> </div>
        <p>Total Match Played : {count} </p>
      </div>
      <div className='btn-components'>
        <Button name={"Reset Score"} bgcolor={"white"} onClick={reset} fontColor={"black"}/>
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

