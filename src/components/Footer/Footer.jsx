import "./Footer.scss";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
export default function Footer() {
  return (
    <div className="footer">
      <div className="hero__social">
        <div className="left">
          <p className="footer_copyright">
            Copyright &copy; 2022 All Rights Reserved by
            <a href="http://localhost:3000/"> SabinG</a>.
          </p>
        </div>
        <div className="right"></div>
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
  );
}
