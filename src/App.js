import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { gsap } from "gsap";

const App = () => {
  const colors = ["#5a7d95", "#1b4943", "#698F3F", "#FBFAF8", "#804E49"];

  const toogleBackground = () => {
    const color = getRandonColor();
    if (background === color) {
      toogleBackground();
    }
    setBackground(getRandonColor());
  };

  const getRandonColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [background, setBackground] = useState(getRandonColor());
  const appRef = useRef(background);

  useEffect(() => {
    gsap.to(appRef.current, {
      backgroundColor: background,
      duration: 1,
      ease: "none"
    });
  }, [background]);

  return (
    <div className="app" ref={appRef}>
      <p>Change background color</p>
      <button className="app__btn" onClick={() => toogleBackground()}>
        Toogle Background Color
      </button>
    </div>
  );
};

export default App;
