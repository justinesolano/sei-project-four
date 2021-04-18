import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const [plants, setPlants] = useState(null)

  console.log('PLANTS', plants)

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get('/api/plants/')
        setPlants(response.data)
        console.log('PLANTS HOME', response.data)
      }
      getData()
    } catch (err){
      console.log(err)
    }
  }, [])

  if (!plants) return null

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Home
