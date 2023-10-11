import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>GARDEN ARTISANS</h1>
        <p>because the garden is your canvas</p>
        <div className="hero-btns">
          
            {/* <Button 
            className="btns"
            ButtonStyle="btn--outline"
            buttonSize="btn--large"
            >
                GET STARTED   
            </Button>
            <Button 
            className="btns"
            ButtonStyle="btn--primary"
            buttonSize="btn--large"
            >
                WATCH TRAILER <i className='far fa-play-circle'/>
            </Button> */}
        </div>    
    </div>
  )
}

export default HeroSection