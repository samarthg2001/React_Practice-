import React, { useContext, useState } from 'react'
import '../game/Game.Module.css'
import { GameContext } from '../../GameProvider'

const Game=()=> {

  const {Totalscore,selectNumebr,setselectNumber}=useContext(GameContext)
  const arrNumber=[1,2,3,4,5,6];
  console.log(useContext(GameContext));
  
  return (
    <div>
      <nav className='nav-bar'>
        <div className='score'>
            <h1>{Totalscore}</h1>
            <p>" Total score "</p>
        </div>
        <div>
            <div className='   number'>
              {arrNumber.map((ele,i)=>
              <button key={i} 
              onClick={()=>setselectNumber(ele)}
                
                style={{backgroundColor:ele!==selectNumebr?"white":'black',
              color:ele!==selectNumebr?"black":'white'}}
              >{ele}</button>)}
            <p>Select Number</p>
            </div>
        </div>
      </nav>
      
    </div>
  )
  }


export default Game;