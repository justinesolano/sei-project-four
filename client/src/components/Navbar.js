import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import greenhouselogo from '../assets/greenhouselogo.png'
import titlelogo from '../assets/titlelogo.png'
import { userIsAuthenticated /*getPayloadFromToken*/ } from './helpers/auth'
import { Menu } from 'semantic-ui-react'
// import { userIsAuthenticated, getPayloadFromToken } from '../helpers/auth'


const Navbar = () => {

  // const [show, handleShow] = useState(false)

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
    location.reload()
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 10) {
  //       handleShow(true)
  //     } else handleShow(false)
  //   })
  //   return () => {
  //     window.removeEventListener('scroll', window)
  //   }
  // }, [])

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
