import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/contact'>Contato</NavLink>
    </nav>
  )
}

export default NavBar