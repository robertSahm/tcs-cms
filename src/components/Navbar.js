import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'
import navCss from '../layouts/nav.sass'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">
      <img src={logo} alt="TCS" />
    </Link>
    
    <div className="link-container">
      <Link className="navbar-item" to="/about">
        About
      </Link>
      <Link className="navbar-item" to="/products">
        Products
      </Link>
      <Link className="navbar-item" to="/products">
        Products
      </Link>
    </div>
  </nav>
)

export default Navbar
