import React, { useState, useEffect } from 'react'
import FavouriteCard from './FavouriteCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'


const Favourites = ({ plantname, newFavourites }) => {
  const [plants, setPlants] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/plants/')
        setPlants(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '50px',
    focusOnSelect: true,
    dragable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }


  if (!plants) return null

  return (
    <div className="slider-container">
      {newFavourites ?
        <div>
          <Slider {...config} className="slider">
            {newFavourites.map(favourite => {
              <Link to={`/${favourite.plantname}`} key={`/${favourite.id}`}  >
                <FavouriteCard key={plantname} {...favourite} />
              </Link>
            })}
          </Slider>
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default Favourites
