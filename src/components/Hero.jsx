import React from 'react'
import '../index.css'
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='hero'>
        <nav>
            <p>&copy; Code by Dennis</p>
            <ul>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="heroCenter">
            <div className="heroCenterleft">
                <div className="heroCenterleftDiv">
                    <div className="centerLeftText">Located <br/> in  the Netherlands</div>
                    <div className="centerLeftIcon"></div>
                </div>
            </div>
            <div className="heroCenterRight">
                <div className="rightArrow"><div style={{transform: 'rotate(45deg)'}}><IoArrowForward /></div></div>
                <div className="rightText">Freelance <br/> Designer & Developer</div>
            </div>
        </div>
        <div className="heroName">Dennis Snellenburg - </div>
    </div>
  )
}

export default Hero