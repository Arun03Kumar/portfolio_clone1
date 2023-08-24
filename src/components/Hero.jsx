import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
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
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    requestAnimationFrame(animate);
  });
  const animate = () => {
    if (xPercent < -104) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -104;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animate);
  };
  // animate()
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
      {/* <LoopingElement currentTranslation={0} speed={0.1}> */}
      <div className="slider" ref={slider}>
        <div
          className="heroName"
          // style={{ transform: `translateX(${position}px)` }}
          ref={firstText}
        >
          Dennis Snellenburg -
        </div>
        {/* </LoopingElement>
      <LoopingElement currentTranslation={-110} speed={0.1}> */}
        <div className="heroName" style={{ left: "110%" }} ref={secondText}>
          Dennis Snellenburg -
        </div>
      </div>
      {/* </LoopingElement> */}
    </div>
  );
};

export default Hero;
