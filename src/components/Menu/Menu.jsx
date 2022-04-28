import './Menu.scss'
import { Home, Article, ContactPage} from "@mui/icons-material";


export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " +  (menuOpen && "active")}>
        <ul>
            <li>
                <a href='#intro' onClick={()=>{setMenuOpen(!menuOpen)}}><span><Home /></span>Home</a>
            </li>
            <li>
                <a href='#portfolio' onClick={()=>{setMenuOpen(!menuOpen)}}><span><Article /></span>Portfolio</a>
            </li>
            <li>
                <a href='#works' onClick={()=>{setMenuOpen(!menuOpen)}}>Works</a>
            </li>
            <li>
                <a href='#contact' onClick={()=>{setMenuOpen(!menuOpen)}}><span><ContactPage /></span>Contact</a>
            </li>
        </ul>
    </div>
  )
}
