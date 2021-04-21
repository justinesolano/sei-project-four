import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Posts = () => {

  const [post, setPost] = useState(null)

  useEffect(() => {
    const getData = async () => {
      console.log('RESPONSE', post)
      try {
        const response = await axios.get('/api/posts/')
        setPost(response.data)
        console.log('POSTSS', response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('PROFILE', post)
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



  return (
    <>
      <h1>Recent posts</h1>
      { post ?
        <div className="slider-container">
          <div>
            <Slider {...config}>
              {post.map(item => (
                <Link to={`/profile/${item.owner.id}`} key={item.id}>
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
        <h2>No posts to show</h2>
      }
    </>
  )

}

export default Posts
