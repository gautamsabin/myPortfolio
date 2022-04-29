import "./Topbar.scss";
import { Person, Mail } from "@mui/icons-material";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="http://localhost:3000/" className="logo">
            SG
          </a>

          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+977 9860673475">+977 9860673475</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:sabingt0@gmail.com">sabingt0@gmail.com</a></span>
          </div>
        </div>

        <div className="right">
          <div
            className="toggleButton"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
