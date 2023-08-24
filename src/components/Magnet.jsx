import React, { useEffect, useRef, useState } from "react";

const Magnet = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  useEffect(() => {
    const cursorPositionHandler = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", cursorPositionHandler);
    return () => {
      window.removeEventListener("mousemove", cursorPositionHandler);
    };
  }, [cursorPosition]);

//   useEffect(() => {
//     const divElement = divRef.current;
//     if (divElement) {
//       const divRect = divElement.getBoundingClientRect();
//       setDivPosition({
//         x: divRect.left + divRect.width / 2,
//         y: divRect.top + divRect.height / 2,
//       });
//     }
//   }, []);

const updateDivPosition = () => {
    const divElement = divRef.current;
    if (divElement) {
      const divRect = divElement.getBoundingClientRect();
      setDivPosition({
        x: divRect.left + divRect.width / 2,
        y: divRect.top + divRect.height / 2,
      });
    }
  };

  useEffect(() => {
    updateDivPosition();
    window.addEventListener("resize", updateDivPosition);
    return () => {
      window.removeEventListener("resize", updateDivPosition);
    };
  }, []);

  const magnetEffect = () => {
    const deltaX = cursorPosition.x - divPosition.x;
    const deltaY = cursorPosition.y - divPosition.y;
    const distance = Math.hypot(deltaX, deltaY);
    if (distance < 200) {
      const maxDistance = 200;
      const easedDistance = (distance / maxDistance) * 2;
      const easingFactor = 0.1;
      const translateX = (easedDistance * deltaX * easingFactor).toFixed(3);
      const translateY = (easedDistance * deltaY * easingFactor).toFixed(3);
      return { x: translateX, y: translateY };
    } 
    // else {
    //     // Apply bounce-back effect
    //     const bounceDistance =1;
    //     const bounceFactor = 0.2;
    //     const translateX = (-bounceDistance * deltaX * bounceFactor).toFixed(3);
    //     const translateY = (-bounceDistance * deltaY * bounceFactor).toFixed(3);
    //     return { x: translateX, y: translateY };
    //   }
    return { x: 0, y: 0 };
  };

  const translation = magnetEffect();
  return (
    <div
      ref={divRef}
      style={{
        width: "fit-content",
        transform: `translate(${translation.x}px, ${translation.y}px)`,
        transition: "transform 0.2s ease",
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
