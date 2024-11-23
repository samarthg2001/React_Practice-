import React from 'react'
import P  from './assets/photo.svg';
import logo from "./assets/LOGO.png"
function App() {
  return (
    <div>
        <header className='header'>
          <img src={logo} alt="" srcset=""  className='logo'/>
        <ul className='header-nav'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </header>

        <h1> CONTACT US</h1>
          <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>

    <div className='main'>
      <div className='form'>
        <div className='form-btn'>  
        <button> Via support chat</button>
        <button> VIA CALL</button>
        </div>

        <button id='email'> VIA EMAIL FORM</button>
        <div className='form-input'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' />
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
          <label htmlFor="text">Text</label>
          <input type="text" id='text'/>
        </div >
        <div id='submit-btn'> 
        <button id='submit'> SUBMIT</button>
        </div>
         </div>
      <div className='img'>
        <img src={P} alt=" photo not found" srcset="" /> 
        </div>
    </div>



            </div>
  )
}

export default App
