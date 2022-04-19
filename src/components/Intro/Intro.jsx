import "./Intro.scss";
import person from "../../assets/person.png";
import Typewriter from "typewriter-effect";
import {
  Facebook,
  Instagram,
  GitHub,
  ArrowDownward,
} from "@mui/icons-material";

export default function Intro() {
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
            <h3>
              I do<span>
              <Typewriter
            options={{
              strings: ["Dveloping", "Designing", "Hosting "],
              autoStart: true,
              loop: true,
            }}
          />
              </span>
            </h3>
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
          <a href="#portfolio">
            <ArrowDownward className="downArrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
