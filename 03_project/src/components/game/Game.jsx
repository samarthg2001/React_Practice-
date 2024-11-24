import React, { useState } from 'react'
import '../game/Game.Module.css'
 const Game=()=> {
  const [selectNumber,setselectNumber]=useState(0)
  const arrNumber=[1,2,3,4,5,6];
  const setvalue=(ele)=>{
    setselectNumber(ele)
    console.log(ele);
  }
  
  return (
    <div>
      <nav className='nav-bar'>
        <div className='score'>
            <h1>0</h1>
            <p>Total Score</p>
        </div>
        <div>
            <div className='   number'>
              {arrNumber.map((ele,i)=>
              <button key={i} 
              onClick={()=>setvalue(ele)}
                
                style={{backgroundColor:ele!==selectNumber?"white":'black',
              color:ele!==selectNumber?"black":'white'}}
              >{ele}</button>)}
            <p>Select Number</p>
            </div>
        </div>
      </nav>
      
    </div>
  )
  }


export default Game;