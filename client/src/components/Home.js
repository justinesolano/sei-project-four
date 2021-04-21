import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sliders from './home/Sliders'
import CategoryIndex from './categories/CategoryIndex'
import Posts from './Posts'
// import Favourites from './home/Favourites'
// import { getPayloadFromToken } from './helpers/auth'
import { Link } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'

const Home = () => {

  const [posts, setPosts] = useState(null)

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
    <div className>
      <Sliders
      />
      { userIsAuthenticated() &&
      <>
        <div className="ui divider"></div>
        <Link to="/allplants">
          <CategoryIndex
          />
        </Link>
        <div className="ui divider"></div>
        <Posts
        />
      </>
      }
      { !userIsAuthenticated() &&
      <>
        <div className="ui divider"></div>
        <Link to="/allplants">
          <CategoryIndex
          />
        </Link>
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
