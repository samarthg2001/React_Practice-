import React, { useContext } from 'react'
import { createContext,useState } from 'react'
export const GameContext=createContext();

function GameProvider({children}) {
    const [selectNumebr,setselectNumber]=useState(0)
    const [Totalscore,setTotalscore]=useState(0)
    const updateScore=(points)=>{
        if(selectNumebr!=0){
        setTotalscore((prevScore)=>prevScore+points)
    }}  
    


  return (
            <GameContext.Provider value={{selectNumebr,setselectNumber,Totalscore,updateScore,setTotalscore}}>
                {children}
            </GameContext.Provider>

  )
}

export default GameProvider
