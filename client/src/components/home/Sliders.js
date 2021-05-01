import React, { useState, useEffect } from 'react'
import SlideShow from './SlideShow'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Sliders = () => {
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
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px',
    focusOnSelect: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }


  if (!plants) return null

  return (
    <div className="slider-container">
      {plants &&
          <div>
            <Slider {...config}>
              {plants.map(plant => (
                <Link to={`/plants/${plant.id}`} key={`/${plant.id}`}  >
                  <SlideShow key={plant.plantname} {...plant} />
                </Link>
              ))}
            </Slider>
          </div>
      }
    </div>
  )
}

export default Sliders
