import { useState } from "react";
import "./Work.scss";

const Work = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/web_design.svg",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "assets/design.png",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/app.png",
    },
    {
      id: "3",
      icon: "./assets/web_dev.svg",
      title: "Web Developent",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/web.png",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className={"slider"}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src="assets/arrow.png"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        className="arrow right"
        src="assets/arrow.png"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Work;
