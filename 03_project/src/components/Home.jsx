import dice from "../assets/dices.png"
import "./Home.Module.css"
import React from 'react'
import Button from "./button/Button"
import { Link, Links } from "react-router-dom"
const Home=()=>{
    return(
        <>
        <div className="container">
            <div className="img">
                <img src={dice} alt=" no photo found" srcset="" />
            </div>
            <div className="home-page">
                <div className="content">
                    <h1>DICE GAME</h1>
                    <div className="home-main-btn"> 
                    <Link to="/game"><Button  name={"Play Now"}/> </Link>
                    </div>
                    
                </div>
            </div>

        </div>
        </>
    )
}

export default Home;