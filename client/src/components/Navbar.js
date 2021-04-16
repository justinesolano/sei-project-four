import React from 'react'
import { Link } from 'react-router-dom'
// import greenhouselogo from '../assets/greenhouselogo.png'
import titlelogo from '../assets/titlelogo.png'


const Navbar = () => {
  return (
    <div className="ui secondary menu">
      <div className="left-nav">
        <Link to="/">
          <img src={titlelogo} className="greenhouse-logo" />
        </Link>
        <Link to="/explore">
          Explore
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Navbar
