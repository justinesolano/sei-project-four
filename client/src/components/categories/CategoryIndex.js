import axios from 'axios'
// import { get } from 'mongoose'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
// import SimpleImageSlider from 'react-simple-image-slider'


function CategoryIndex() {

  const [category, setCategory] = useState(null)
  console.log('CATEGORY', category)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/categories/')
        setCategory(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // const flower = 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1508426178/products/anthurium-275.jpg'
  // const noFlower = 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1535551624/products/rubber-plant-a8875c.jpg'
  // const almostUnkillable = 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1519842763/products/zamioculcas-raven-f5ca64.jpg'
  // const easyCare = 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1578052065/pk98gfouoobsjwvvr1ou.jpg'
  // const highMaintenance = 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1594296523/dpnkx4fdp3yzijlbdtrr.jpg'


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


  if (!category) return null

  return (
    <>
      <h1 className="browse">Categories</h1>
      { category ?
        <div className="slider-container">
          <div>
            <Slider {...config}>
              {category.map(item => (
                <Link to={'/allplants'} key={item.id}>
                  <div className="each-slide">
                    <div>
                      <span> 
                        <img src={item.image} className="slide-image"/>
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
