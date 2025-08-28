import { Link, Outlet } from 'react-router-dom'
import icon from '../assets/react.svg'


export default function Layaut() {
  return (<>
  <header>
    <header>
    <nav>
    <img src={icon} alt="react" style={{width: '40px', height: "40px"}} />
    <Link to={'/'}Home></Link>
    
    </nav>
    </header>
    <Outlet/>
    <footer>
        Meade by Geeks lesson 
    </footer>
  </header>
  </>
  )
}
