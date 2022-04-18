import './Topbar.scss'
import { Person, Mail } from '@mui/icons-material'
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
          <div className='left'>
          <a href='#intro' className='logo'>Ram</a>
          <div className='itemContainer'>
          <Person className='icon' />
          <span>+977 9860673475</span>
          </div>
          <div className='itemContainer'>
          <Mail className='icon' />
          <span>Sabingt0@gmail.com</span>
          </div>
          </div>
          
          <div className='right'>
          <div className='toggleButton' onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
          </div>
        </div>
    </div>
  )
}
