import React, { useState, useEffect } from 'react'
// import { Slide } from 'react-slideshow-image'
import Whirligig from 'react-whirligig'
import SlideShow from './SlideShow'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Slider = ({ plantname }) => {
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

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  // error conditional

  // if (!plants) return null

  return (
    <div className="slider-container">
      {plants &&
            <div>
              <button onClick={prev}>Prev</button>
              <Whirligig
                visibleSlides={3}
                gutter="1em"
                ref={(_whirligigInstance) => { 
                  whirligig = _whirligigInstance 
                }}>
                {plants.map(plant => (
                  <Link to={`/${plant.plantname}`} key={`/${plant.id}`}  >
                    <SlideShow key={plantname} {...plant} />
                  </Link>
                ))}
              </Whirligig>
              <button onClick={next}>Next</button>
            </div>
        // <Slide easing="ease">
        //   {plants.map(plant => (
        //     <Link to={`/${plant.plantname}`} key={`/${plant.id}`}  >
        //       <SlideShow key={plantname} {...plant} />
        //     </Link>
        //   ))}
        // </Slide>
      }
    </div>
  )
}

export default Slider
