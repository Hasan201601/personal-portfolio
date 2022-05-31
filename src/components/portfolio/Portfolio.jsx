import { useEffect, useState } from "react";
import { projects } from "../../Data/Data";
import "./Portfolio.scss";

const allCategoryValues = [
  "Featured",
  ...new Set(projects.map((data) => data.category)),
];

const Portfolio = () => {
  const [category, setCategory] = useState("Featured");
  const [data, setData] = useState(projects);
  useEffect(() => {
    const categoryData = projects.filter((curElem) => {
      return curElem.category === category;
    });
    category === "Featured" ? setData(projects) : setData(categoryData);
  }, [category]);
  const handleClick = (item) => {
    setCategory(item);
  };
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {allCategoryValues.map((item, index) => (
          <button
            key={index}
            className={
              category === item ? "portfolioList active" : "portfolioList"
            }
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img2} alt="" />
            <h3>{d.projectName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
