import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sliders from './home/Sliders'
import CategoryIndex from './categories/CategoryIndex'
import Favourites from './home/Favourites'
import { getPayloadFromToken } from './helpers/auth'
import { Link } from 'react-router-dom'

const Home = () => {

  const [favourites, setFavourites] = useState(null)
  const [newFavourites, setNewFavourites] = useState(null)

  // setNewFavourites = setMyNewList

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('/api/auth/profiles/')
        response.data.map(user => {
          if (user.id === getPayloadFromToken().sub) {
            setNewFavourites(user.myList)
            setFavourites(user.myList)
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  })

  const handleFavourite = async (event) => {
    const name = event.target.name
    const profileId = getPayloadFromToken().sub
    const newFavouritesList = favourites
    try {
      favourites.map(plant => {
        if (plant.id === event.target.name){
          throw new Error
        }
      })
      const { data } = await axios.get(`/api/plants/${name}`)
      newFavouritesList.push(data)
      setFavourites({ ...newFavouritesList })
      await axios.post(`/api/profile/${profileId}/favourites`, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }, [])
    } catch (err){
      console.log('Cannot be added to My Favourites.')
      window.alert('Cannot add to My List because you are not logged in.')
    }
  }


  return (
    <div className>
      <Sliders
      />
      <div></div>
      <div className="ui divider"></div>
      <Link to="/allplants">
        <CategoryIndex
        />
      </Link>
      <Favourites
        newFavourites={newFavourites}
        handleFavourite={handleFavourite}
      />
    </div>
  )
}

export default Home
