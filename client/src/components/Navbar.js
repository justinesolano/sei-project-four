import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import titlelogo from '../assets/titlelogo.png'
import { userIsAuthenticated, getPayloadFromToken } from './helpers/auth'
import { Menu } from 'semantic-ui-react'


const Navbar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    location.reload()
  }

  const profileId = getPayloadFromToken().sub

  return (
    <Menu className="ui borderless menu">
      <div className="left menu">
        <Link to="/explore" className="item">
          Explore
        </Link>
        <Link to="/allplants" className="item">
          All Plants
        </Link>
      </div>
      <Menu.Item className="logo-nav" position="right">
        <Link to="/" className="logo centered">
          <img src={titlelogo} className="greenhouse-logo" />
        </Link>
      </Menu.Item>
      <div className="right menu">              
        { !userIsAuthenticated() &&
      <>
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/register" className="item">
          Register
        </Link>
      </>
        }
        { userIsAuthenticated() &&
      <>
        <Link to="/newpost" className="item">
        Make a post
        </Link>
        <Link to={`/profile/${profileId}`}  className="item">
          My profile
        </Link>
        <Link to="/login" className="item" onClick={handleLogout}>
          Logout
        </Link>
      </>
        }
      </div>
    </Menu>
  )
}

export default Navbar
