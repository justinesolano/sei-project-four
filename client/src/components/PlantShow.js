import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { getTokenFromLocalStorage } from './helpers/auth'
import Comment from './comments/Comment'


const PlantShow = () => {

  const [plant, setPlant] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      console.log('PARAMS', params)
      try {
        const { data } = await axios.get(`/api/plants/${params.id}`)
        setPlant(data)
        console.log('PLANTS DATA RESPONSE', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [params.id])


  console.log('PLANTS ID', plant)

  return (
    <>
      { plant ? 
        <>
          <div>
            <h1 className="plant-name">{plant.plantname}</h1>
            <h2> {plant.scientificname} </h2>
            <h2> {plant.family} </h2>
            <img src={plant.image} alt={plant.plantname} className="plant-image"/>
            <p> {plant.size} </p> <p> {plant.maintenancelevel} </p>
            <p> Best suited: {plant.bestsuited} </p>
            <p> {plant.averageprice} </p>
            <p> {plant.description} </p>
            <p> {plant.careinstructions} </p>
            <Comment />
            { plant &&
            <>
              <h2>Comments</h2>
              <div className="ui comments">
                {/* <h2>Comments</h2> */}
                {plant.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <a className="avatar">
                      <img src={comment.owner.profile_image} />
                    </a>
                    <div className="content">
                      <h4> {comment.owner.username} </h4>
                      <p>{comment.text}</p>
                    </div>
                    <Link to={`/plants/${params.id}/comment`} className="ui button">Edit</Link>
                    <div className="ui divider"/>
                  </div>
                ))}
              </div>
            </>
            }
          </div>
        </>
        :
        <h1>Something went wrong!</h1>
      }
    </>
  )
}

export default PlantShow




{/* { newComment &&
          <div>
            { newComment[0].text.map(comment => (
              <form className="ui form" key={comment[0].text} onSubmit={handleSubmit}>
                <div className="field">
                  <label>Leave a comment?</label>
                  <input
                    className="input"
                    type="text"
                    name="text"
                    value={plant.comments.text}
                    onChange={handleChange}
                  />
                </div>
                <button className="ui green button" type="submit">Submit!</button>
              </form>
            ))}
          </div>
          } */}