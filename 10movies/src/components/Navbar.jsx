import React from 'react'
import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <link to="/">Movies App</link>
      </div>
     <div className='navbar-links'>
      <link to="/" className="nav-link">Home</link>
      <link to="/favorites" className="nav-link">Favorites</link>

     </div>
    </nav>
  )
}

export default Navbar
