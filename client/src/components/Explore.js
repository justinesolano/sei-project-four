import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'

const Explore = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      console.log('RESPONSE', posts)
      try {
        const response = await axios.get('/api/posts/')
        setPosts(response.data)
        console.log('POSTSS', response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!posts) return null

  console.log('POSTS', posts)
  return (
    <>   
      { posts ?
        <>
          <div>
            <h1>Explore</h1>
          </div>
          { posts &&
        <div className="ui grid">
          { posts.map(post => (
            <div className="four wide column" key={post.id}>
              <Link to={`/profile/${post.owner.id}`}>
                <PostCard {...post} />
              </Link>
            </div>
          ))}
        </div>
          }
        </>
        :
        <div>Something went wrong!</div>
      }
    </>
  )
}

export default Explore
