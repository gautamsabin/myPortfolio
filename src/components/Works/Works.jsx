import "./Works.scss";
import { useEffect, useState } from "react";
import arrow from "../../assets/arrow.png";
import { GitHub } from "@mui/icons-material";
// import axios from "axios";
import {githubProject} from "../../constant/data"
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8626/user/project/").then((response) => {
  //     setData(response.data);
  //   });
  // }, [setData]);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < githubProject.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {githubProject.map((d, index) => (
          <div key={index} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <a href={d.link} target="_blank" rel="noreferrer">
                      <GitHub />
                    </a>
                  </div>
                  <h2>{d.name}</h2>
                  <p>{d.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
