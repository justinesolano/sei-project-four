import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = () => {

  const [profile, setProfile] = useState(null)
  const { id } = useParams()

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

  console.log('PROFILE ID', profile)

  return (
    <>
      { profile ?
        <div>
          <h1> {profile.username} </h1>
          <h2> {profile.first_name} </h2>
          <img src={profile.profile_image}></img>
          <h2>Recent activity</h2>
          
        </div>
        :
        <h1>User does not exist</h1>  
      }
    </>
  )
}

export default UserProfile
