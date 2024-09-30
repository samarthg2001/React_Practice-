import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#ffffff")

  const ColorchangeEvent=(event)=>{
    setColor(event.target.value)
  }

  
  return (
    <>
    <div className='container'>
      <h1> Color picker App</h1>
      <div className='color-box' style={{background:color}}>
        <p>selected Color :{color} </p>
      </div>

      <label>Select the Color : </label><br />
      <input type="color"  onChange={ColorchangeEvent} />
    </div>

    </>
  )
}

export default App
