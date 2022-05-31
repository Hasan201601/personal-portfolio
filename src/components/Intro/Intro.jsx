import { useEffect, useRef } from "react";
import "./Intro.scss";
import Typed from "typed.js";

const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "React Developer",
        "MERN Stack Developer",
        "Typescipt Developer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img">
          <svg
            className="blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FF0066"
              d="M53.4,-73.3C68.6,-62.5,79.7,-46,85.5,-27.9C91.2,-9.7,91.5,10.1,85,26.8C78.4,43.5,64.9,57.1,49.6,66.9C34.3,76.6,17.1,82.4,-0.2,82.7C-17.6,83,-35.2,77.8,-49.6,67.8C-64,57.8,-75.2,42.9,-80.8,26.1C-86.4,9.3,-86.5,-9.4,-81.2,-26.6C-75.9,-43.7,-65.1,-59.3,-50.7,-70.4C-36.3,-81.4,-18.1,-87.9,0.5,-88.6C19.1,-89.3,38.3,-84.2,53.4,-73.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <img className="self" src="assets/self.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hasanuzzaman Hasan</h1>
          <h3>
            Freelance <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
