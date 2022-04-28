import "./Intro.scss";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import hero from "../../assets/hero.png";
export default function Intro() {
  return (
    <div className="hero" id="intro">
      <div className="container">
      <div className="hero_heading">
      <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span className="hero__name">Sabin Gautam</span>
        </h1>
      </div>

        <div className="hero__img">
          <img src={hero} alt="" />
        </div>
        <div className="hero__info">
          <p className="paragraph">
            I am working as a freelance web designer and developer for 4 years.
            I love to design and make new web experiences for the people.
          </p>
          <button id="button1">About Me</button>
        </div>
        <div className="hero__social">
         
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="http://facebook.com/webcifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="http://twitter.com/webcifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="http://isntagram.com/web_cifar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="http://webcifar.com" target="_blank" rel="noreferrer">
                  <LinkedIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
