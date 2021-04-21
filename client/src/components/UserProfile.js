import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = () => {

  const [profile, setProfile] = useState(null)
  // const [posts, setPosts] = useState('')
  const { id } = useParams()
  // console.log('POST', posts)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/auth/profile/${id}`)
        setProfile(data)
        console.log('PROFILE DATA', data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  console.log('PROFILE ID', profile)

  return (
    <>
      { profile ?
        <div className="profile-page">
          <div className="profile-details">
            <img src={profile.profile_image} className="profile-image"></img>
            <div className="profile-names">
              <h1 className="profile-username"> {profile.username} </h1>
              <h2 className="profile-name"> {profile.first_name} </h2>
            </div>
          </div>
          <>
            <h2 className="recent-activity">Recent activity</h2>
            <div>
              {profile.posts.map(post => (
                <ul key={post.id}>
                  <li>
                    {post.title}
                    <img src={post.image}></img>
                  </li>
                </ul>
              ))}
            </div>
          </>
        </div>
        :
        <h1>User does not exist</h1>  
      }
    </>
  )
}

export default UserProfile
