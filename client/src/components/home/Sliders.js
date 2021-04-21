import React, { useState, useEffect } from 'react'
// import { Slide } from 'react-slideshow-image'
// import Whirligig from 'react-whirligig'
import SlideShow from './SlideShow'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Sliders = () => {
  const [plants, setPlants] = useState(null)
  // console.log('PLANTS', plants)

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

  // const config = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '50px',
  //   focusOnSelect: true,
  //   dragable: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // }


  // error conditional
  if (!plants) return null

  return (
    <div>
      {plants &&
          <div>
            <Carousel>
              {plants.map(plant => (
                <Link to={`/plants/${plant.id}`} key={`/${plant.id}`}  >
                  <Carousel.Item>
                    <SlideShow key={plant.plantname} {...plant} />
                  </Carousel.Item>
                </Link>
              ))}
            </Carousel>
          </div>
      }
    </div>
  )
}

export default Sliders
