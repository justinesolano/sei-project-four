import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { Link } from 'react-router-dom'

const Explore = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/posts/')
        setPosts(response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  if (!posts) return null

  return (
    <>   
      { posts ?
        <div className="explore-page">
          <div>
            <h1 className="explore title">Explore</h1>
          </div>
          <div className="explore">
            { posts &&
        <div className="ui four column grid cards">
          { posts.map(post => (
            <div className="content" key={post.id}>
              <Link to={`/profile/${post.owner.id}`}>
                <PostCard {...post} />
              </Link>
            </div>
          ))}
        </div>
            }
          </div>
        </div>
        :
        <div>Something went wrong!</div>
      }
    </>
  )
}

export default Explore
