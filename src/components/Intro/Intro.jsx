import "./Intro.scss";
import person from "../../assets/person.png";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Facebook,
  Instagram,
  GitHub,
  ArrowDownward
} from "@mui/icons-material";



export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={person} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="introInfo">
            <h2>Hello, It's me</h2>
            <h1>Sabin Gautam</h1>
            <h3>I am <span ref={textRef}></span></h3>
          </div>
          <div className="IntroIcons">
            <div className="icon">
              <Facebook />
            </div>
            <div className="icon">
              <Instagram />
            </div>
            <div className="icon">
              <GitHub />
            </div>
          </div>
         <a href="#portfolio"><ArrowDownward className="downArrow" /></a> 
        </div>
        
      </div>
    </div>
  );
}
