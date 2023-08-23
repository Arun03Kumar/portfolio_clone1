import React, { useEffect, useRef, useState } from "react";

const LoopingElement = ({ children, currentTranslation, speed }) => {
  const elementRef = useRef();
  const [direction, setDirection] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const metric = 110;

  const lerp = {
    current: currentTranslation,
    target: currentTranslation,
    factor: 0.8,
  };

  //   const events = () => {
  //     window.addEventListener("scroll", () => {
  //         console.log('scroll')
  //       const direction = window.scrollY || document.documentElement.scrollTop;
  //       console.log(direction)
  //       if (direction > scrollTop) {
  //         console.log("scroll down");
  //         setDirection(true);
  //         lerp.target += speed * 5;
  //       } else {
  //         console.log("scroll down");
  //         setDirection(false);
  //         lerp.target -= speed * 5;
  //       }
  //       setScrollTop(direction <= 0 ? 0 : direction);
  //     });
  //   };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY) {
      console.log("Scrolling down");
      setDirection(true);
      lerp.target += speed * 5;
    } else if (currentScrollY < prevScrollY) {
      console.log("Scrolling up");
      setDirection(false);
      lerp.target -= speed * 5;
    }

    setPrevScrollY(currentScrollY);
  };

  const lerpFunc = (current, target, factor) => {
    lerp.current = current * (1 - factor) + target * factor;
  };

  const goForward = () => {
    lerp.target += speed;
    if (lerp.target > metric) {
      lerp.current -= metric * 2;
      lerp.target -= metric * 2;
    }
  };

  const goBackward = () => {
    lerp.target -= speed;
    if (lerp.target < -metric) {
      lerp.current -= -metric * 2;
      lerp.target -= -metric * 2;
    }
  };

  const animate = () => {
    direction ? goForward() : goBackward();
    lerpFunc(lerp.current, lerp.target, lerp.factor);

    elementRef.current.style.transform = `translateX(${lerp.current}%)`;

    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // events();
    animate();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // return () => {
    //   window.removeEventListener("scroll", events);
    // };
  }, [prevScrollY]);

  // const handleScroll = () => {
  //   const currentScrollY = window.scrollY;

  //   if (currentScrollY > prevScrollY) {
  //     console.log("Scrolling down");
  //   } else if (currentScrollY < prevScrollY) {
  //     console.log("Scrolling up");
  //   }

  //   setPrevScrollY(currentScrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollY]);

  return (
    <div className="looping-element" ref={elementRef}>
      {children}
    </div>
  );
};

export default LoopingElement;
