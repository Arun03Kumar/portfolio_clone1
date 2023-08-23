import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../index.css";
import { IoArrowForward } from "react-icons/io5";
import LoopingElement from "./LoopingElement";

const Hero = () => {
  //   const elem2 = document.getElementsByClassName('heroName')[1].getBoundingClientRect();
  // const containerWidth = window.innerWidth;
  // const [position, setPosition] = useState(containerWidth);
  // const step = -1;

  // useEffect(() => {
  //   const elem1 = document
  //     .getElementsByClassName("heroName")[0]
  //     .getBoundingClientRect();
  //   const animate = () => {
  //     setPosition((prevPosition) => prevPosition + step);
  //     requestAnimationFrame(animate);
  //   };
  //   const animationId = requestAnimationFrame(animate);
  //   return () => {
  //     cancelAnimationFrame(animationId);
  //   };
  // }, []);
  return (
    <div className="hero">
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
            <div className="centerLeftText">
              Located <br /> in the Netherlands
            </div>
            <div className="centerLeftIcon"></div>
          </div>
        </div>
        <div className="heroCenterRight">
          <div className="rightArrow">
            <div style={{ transform: "rotate(45deg)" }}>
              <IoArrowForward />
            </div>
          </div>
          <div className="rightText">
            Freelance <br /> Designer & Developer
          </div>
        </div>
      </div>
      <LoopingElement currentTranslation={0} speed={0.02}>
        <div
          className="heroName"
          // style={{ transform: `translateX(${position}px)` }}
        >
          <span>- Dennis Snellenburg -</span>
        </div>
      </LoopingElement>
      <LoopingElement currentTranslation={-110} speed={0.02}>
        <div
          className="heroName"
          // style={{ transform: `translateX(${position}px)` }}
        >
          <span> - Dennis Snellenburg -</span>
        </div>
      </LoopingElement>
    </div>
  );
};

export default Hero;
