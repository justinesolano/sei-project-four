import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'


const Home = () => {

  const [plants, setPlants] = useState(null)
  // if (!plants) return null
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/plants/')
        setPlants(response.data)
        console.log('PLANTS DATA', response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!plants) return null

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <div>Hello</div>
      { plants &&
    <div className="slider">
      <Slider { ...settings }>
        { plants.map(plant => {
          <div>
            <img src={plant.image} />
            <h1>Hello</h1>
          </div>
        })}
      </Slider>
    </div>
      }
    </>
  )
}

export default Home
