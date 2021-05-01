import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import SlideShow from './home/SlideShow'


const UserProfile = () => {

  const [profile, setProfile] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/auth/profile/${id}/`)
        setProfile(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  const config = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px',
    focusOnSelect: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }


  return (
    <>
      { profile ?
        <div className="profile-page">
          <div className="profile-details">
            <img src={profile.profile_image} className="profile-image"></img>
            <div className="profile-names">
              <h1 className="profile-username"> {profile.username} </h1>
              <div className="profile-fields">
                <h3 className="profile-name"> {profile.first_name} {profile.last_name} </h3>
                <h3 className="profile-email"> {profile.email} </h3>
              </div>
            </div>
          </div>
          <>
            <h2 className="recent-activity">Recent activity</h2>
            { profile.posts.length > 5 ?
              <div className="profile-slider">
                <Slider {...config}>
                  {profile.posts.map(post => (
                    <SlideShow key={post.id} {...post} />
                  ))}
                </Slider>
              </div>
              :
              <>
                <div className="profile-posts">
                  {profile.posts.map(post => (
                    <div className="less-than-five" key={post.id}>
                      <img src={post.image} className="profile-activity"></img>
                    </div>
                  ))}
                </div>
              </>
            }
          </>
        </div>
        :
        <h1>User does not exist</h1>  
      }
    </>
  )
}

export default UserProfile
