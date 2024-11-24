    import React from 'react'
import "../button/Button.Module.css"
function Button(props) {
     
      const changes={
        backgroundColor:props.bgcolor,
        color:props.fontColor,
      }


    return (
    <div className='button-jsx'>
    <button style={changes} onClick={props.onClick}> {props.name}</button>    
    </div>
  )
}

export default Button
