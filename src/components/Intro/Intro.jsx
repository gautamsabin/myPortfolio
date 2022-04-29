import "./Intro.scss";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
export default function Intro() {
  return (
    <div className="hero" id="intro">
      <div className="container">
        <div className="hero__img">
          <div className="hero_header">
            <h2>Hello, This is</h2>
            <h1>Sabin Gautam</h1>
          </div>
          <div className="hero__info">
            <p className="paragraph">
              I am working as a optimun web designer and developer for 1
              month. I love to design and make new web experiences for the
              people.
            </p>
            <button id="button1">About Me</button>
          </div>
        </div>

        <div className="hero__social">
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/sabin.gautam.7771/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mesabin33"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sabingautam007/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sabin-gautam-8b033422b/"
                  target="_blank"
                  rel="noreferrer"
                >
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
