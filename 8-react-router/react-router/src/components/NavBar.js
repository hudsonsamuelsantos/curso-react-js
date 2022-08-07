import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavBar.css"

function NavBar() {
  return (
    <nav>
        <NavLink 
          to={"/"}
          className={({ isActive }) => (isActive ? 'is-active' : 'not-active')}
        >
          Home
        </NavLink>
        
        <NavLink to={"/about"}>About</NavLink>        
    </nav>
  )
}

export default NavBar