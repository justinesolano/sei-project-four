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
      // console.log('PARAMS', params)
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


  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const { data } = await axios.get('/api/posts/')
  //       setPosts(data)
  //       console.log('PROFILE', data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getPost()
  // })
  

  console.log('PROFILE ID', profile)

  return (
    <>
      { profile ?
        <div>
          <h1> {profile.username} </h1>
          <h2> {profile.first_name} </h2>
          <img src={profile.profile_image}></img>
          <>
            <h2>Recent activity</h2>
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
