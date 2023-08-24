import React, { useEffect, useRef, useState } from "react";
import Magnet from "./Magnet";

const calculateDistance = (x1, y1, x2, y2) => {
  return Math.hypot(x1 - x2, y1 - y2);
};

const Downhero = () => {
  // const magnet = useRef(null);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [magnetPosition, setMagnetPosition] = useState({});
  // const [distanceFromCenterOfMagnet, setDistanceFromCenterOfMagnet] =
  //   useState(0);

  // useEffect(() => {
  //   if (magnet.current)
  //     setMagnetPosition(magnet.current.getBoundingClientRect());
  // }, []);
  // console.log(magnetPosition);
  // console.log(mousePosition);
  // console.log('mp', mousePosition.x - magnetPosition.x)

  // const mousePositionHandler = (event) => {
  //   const { clientX, clientY } = event;
  //   setMousePosition({ x: clientX, y: clientY });
  // };
  // useEffect(() => {
  //   window.addEventListener("mousemove", mousePositionHandler);
  //   return () => {
  //     window.removeEventListener("mousemove", mousePositionHandler);
  //   };
  // }, []);

  // const render = () => {
  //   const distanceFromCenterOfMagnet = calculateDistance(
  //     mousePosition.x,
  //     mousePosition.y,
  //     magnetPosition.left + magnetPosition.width / 2,
  //     magnetPosition.top + magnetPosition.height / 2
  //   );
  //   requestAnimationFrame(render);
  // };
  // // console.log(distanceFromCenterOfMagnet)

  // render();

  // useEffect(() => {
  //   if (magnetPosition) {
  //     const distance = calculateDistance(
  //       mousePosition.x,
  //       mousePosition.y,
  //       magnetPosition.left + magnetPosition.width / 2,
  //       magnetPosition.top + magnetPosition.height / 2
  //     );
  //     setDistanceFromCenterOfMagnet(distance);
  //   }
  // }, [mousePosition, magnetPosition]);

  // useEffect(() => {
  //   const render = () => {
  //     // console.log(distanceFromCenterOfMagnet)
  //     if (magnetPosition) {
  //       const distance = calculateDistance(
  //         mousePosition.x,
  //         mousePosition.y,
  //         magnetPosition.left + magnetPosition.width / 2,
  //         magnetPosition.top + magnetPosition.height / 2
  //       );
  //       setDistanceFromCenterOfMagnet(distance);
  //     }
  //     console.log(distanceFromCenterOfMagnet)
  //     requestAnimationFrame(render);
  //   };
  //   render();
  //   return () => {
  //     cancelAnimationFrame(render);
  //   };
  // }, [magnetPosition, mousePosition]);

  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [divPosition, setDivPosition] = useState({ x: 0, y: 0 });

  // const divRef = React.useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const { clientX, clientY } = event;
  //     setCursorPosition({ x: clientX, y: clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const divElement = divRef.current;
  //   if (divElement) {
  //     const divRect = divElement.getBoundingClientRect();
  //     setDivPosition({
  //       x: divRect.left + divRect.width / 2,
  //       y: divRect.top + divRect.height / 2,
  //     });
  //   }
  // }, []);

  // const calculateTranslation = () => {
  //   const deltaX = cursorPosition.x - divPosition.x;
  //   const deltaY = cursorPosition.y - divPosition.y;
  //   const distance = Math.hypot(deltaX, deltaY);

  //   if (distance < 200) {
  //     const maxDistance = 200;
  //     const easedDistance = (distance / maxDistance) * 2;
  //     const easingFactor = 0.1;
  //     const translateX = (easedDistance * deltaX * easingFactor).toFixed(3);
  //     const translateY = (easedDistance * deltaY * easingFactor).toFixed(3);
  //     return { x: translateX, y: translateY };
  //   }
  //   return { x: 0, y: 0 };
  // };

  // const translation = calculateTranslation();

  return (
    <div className="downHeroMain">
      <div className="downHeroChild">
        <div className="downHeroChileLeft">
          <p>
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </p>
          <p>RECENT WORK</p>
        </div>
        <div className="downHeroChileRight">
          <p>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </p>
          <Magnet>
            <div
              className="aboutBtn"
              style={
                {
                  // transform: `translate(${translation.x}px, ${translation.y}px)`,
                  // transition: "transform 0.5s ease-out",
                }
              }
            >
              <Magnet>
                <p>About me</p>
              </Magnet>
            </div>
          </Magnet>
        </div>
      </div>
    </div>
  );
};

export default Downhero;
