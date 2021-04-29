import axios from 'axios'
// import { get } from 'mongoose'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
// import SimpleImageSlider from 'react-simple-image-slider'


function CategoryIndex() {

  const [category, setCategory] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/categories/')
        setCategory(response.data)
        console.log('RESPONSE', response)
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
    dragable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }


  if (!category) return null

  return (
    <>
      { category ?
        <div className="slider-container">
          <div>
            <Slider {...config}>
              {category.map(catg => (
                <Link to={'/allplants'} key={catg.id}>
                  <div className="each-slide">
                    <div>
                      <span> 
                        <img src={catg.image} className="slide-image"/>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
        :
        <h2>Cannot load categories</h2>
      }
    </>
  )
}

export default CategoryIndex
