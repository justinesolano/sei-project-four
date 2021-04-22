import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


const PostCard = ({ title, image, owner }) => {

  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/auth/profiles/')
        setProfile(response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!profile) return null

  return (
    <>
      <div className="ui card">
        <div className="content">
          <img className="ui avatar image" src={owner.profile_image}></img>
          <p className="right floated meta">{owner.username}</p>
          <br />
          <div className="image-div">
            <img src={image} className="image explore"></img>
          </div>
          <div className="explore"> 
            <h2 className="post-title">{`${title}`}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCard
