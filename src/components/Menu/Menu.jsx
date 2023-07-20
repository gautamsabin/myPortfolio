import './Menu.scss'
import { Home, Article, ContactPage, Analytics} from "@mui/icons-material";

import { Link } from 'react-router-dom';
export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " +  (menuOpen && "active")}>
        <ul>
            <li>
                <Link to='/' onClick={()=>{setMenuOpen(!menuOpen)}}><Home />Home</Link>
            </li>
            <li>
                <Link to='/portfolio' onClick={()=>{setMenuOpen(!menuOpen)}}><span><Article /></span>Services</Link>
            </li>
            <li>
                <Link to='/works' onClick={()=>{setMenuOpen(!menuOpen)}}><Analytics/>Works</Link>
            </li>
            <li>
                <Link to='/contact' onClick={()=>{setMenuOpen(!menuOpen)}}><span><ContactPage /></span>Contact</Link>
            </li>
        </ul>
    </div>
  )
}
