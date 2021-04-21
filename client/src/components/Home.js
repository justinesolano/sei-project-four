import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sliders from './home/Sliders'
import CategoryIndex from './categories/CategoryIndex'
import Posts from './Posts'
// import Favourites from './home/Favourites'
// import { getPayloadFromToken } from './helpers/auth'
import { Link } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

  const [posts, setPosts] = useState(null)
  // const element = <FontAwesomeIcon icon={faTwitter} />

  useEffect(() => {
    const getData = async () => {
      console.log('RESPONSE', posts)
      try {
        const response = await axios.get('/api/posts/')
        setPosts(response.data)
        console.log('POSTSS', response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!posts) return null
  console.log('POSTS', posts)


  return (
    <div className="home-body">
      {/* <div className="space">Hello</div> */}
      <div className="hero">
        <div className="sliders">
          <Sliders
          />
        </div>
        <div>
          <h2 className="home-title">Plants for you</h2>
          <h4 className="home-description">Need some ideas for nature&apos;s best home decor?</h4>
          <div className="browse-buttons">
            <Link to="/allplants" >
              <button className="browse-for-plants">Browse the greenhouse!</button>
            </Link>
            <Link to="/explore">
              <button className="browse-for-plants">Browse purchased plants!</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="home-title">Browse</div> */}
      { userIsAuthenticated() &&
      <>
        <div className="ui divider"></div>
        <div className="second-row">
          <div className="info-two">
            <h2 className="home-title-two">Have a good eye?</h2>
            <h4 className="home-description-two">Upload photos of your greenery to inspire others!</h4>
            <div className="browse-buttons-two">
              <Link to="/newpost" >
                <button className="browse-for-plants-two">Share your plants!</button>
              </Link>
              {/* <Link to="/explore">
                <button className="browse-for-plants">Browse purchased plants!</button>
              </Link> */}
            </div>
          </div>
          <div className="slider-two">
            <Posts
            />
            {/* <div className="home-title">Categories</div> */}
          </div>
        </div>
        {/* <div className="ui divider"></div>
        <CategoryIndex
        /> */}
        <div className="ui divider"></div>
        <div className="hero">
          <div className="sliders">
            <CategoryIndex
            />
          </div>
          <div>
            <h2 className="home-title">Questions?</h2>
            <h4 className="home-description">Contact us!</h4>
            <div className="browse-buttons">
              {/* <Link to="/allplants" >
                <button className="browse-for-plants">Email</button>
              </Link> */}
              <div className="social-media">
                <a href="https://twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} className="icons fa-3x"/>
                </a>
                <Link to="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} className="icons fa-3x"/>
                </Link>
                <Link to="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} className="icons fa-3x"/>
                </Link>
              </div>
              {/* <Link to="/explore">
                <button className="browse-for-plants">Browse purchased plants!</button>
              </Link> */}
            </div>
          </div>
        </div>
      </>
      }
      { !userIsAuthenticated() &&
      <>
        <div className="ui divider"></div>
        <div className="second-row">
          <div className="info-two">
            <h2 className="home-title-two">Questions?</h2>
            <h4 className="home-description-two">Contact us!</h4>
            <div className="browse-buttons">
              {/* <Link to="/allplants" >
                <button className="browse-for-plants">Email</button>
              </Link> */}
              <div className="social-media">
                <a href="https://twitter.com/">
                  <FontAwesomeIcon icon={faTwitter} className="icons fa-3x"/>
                </a>
                <Link to="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebook} className="icons fa-3x"/>
                </Link>
                <Link to="https://www.instagram.com/">
                  <FontAwesomeIcon icon={faInstagram} className="icons fa-3x"/>
                </Link>
              </div>
              {/* <Link to="/explore">
                <button className="browse-for-plants">Browse purchased plants!</button>
              </Link> */}
            </div>
          </div>
          <div className="slider-two">
            <CategoryIndex
            />
            {/* <div className="home-title">Categories</div> */}
          </div>
        </div>
      </>
      }
      {/* <Favourites
        newFavourites={newFavourites}
        handleFavourite={handleFavourite}
      /> */}
    </div>
  )
}

export default Home
