import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
          <div className="plant-page-all">
            <div className="plant-page-white">
              <div className="plant-page-parent">
                <div className="ui items plant-page">
                  <div className="item plant-page">
                    <div className="plant-image">
                      <img src={plant.image} alt={'../assets/cannotload.png'} className="plant-image"/>
                      <p className="plant-description"> {plant.description} </p>
                    </div>
                    <div className="content plant-page">
                      <div className="plant-name-section">
                        <h1 className="plant-header">{plant.plantname}</h1>
                        <h2 className="plant-nickname"> {plant.scientificname} </h2>
                        <h2 className="plant-family-description"> {plant.family} </h2>
                      </div>
                      <div className="ui divider"/>
                      <p className="plant-size">Size: {plant.size} </p> <p>Maintenance: {plant.maintenancelevel} </p>
                      <p> Best suited: {plant.bestsuited} </p>
                      <p>Average price: £ {plant.averageprice} </p>
                      <h3 className="plant-care"> Care instructions:</h3>
                      <p>{plant.careinstructions} </p>
                    </div>
                  </div>
                </div>
              </div>
              <Comment />
              { plant &&
            <>
              <h2 className="comments-title">Comments</h2>
              <div className="ui comments">
                <div className="comments-section">
                  {/* <h2>Comments</h2> */}
                  {plant.comments.map(comment => (
                    <div key={comment.id} className="comment section">
                      <a href={`/profile/${comment.owner.id}`} className="avatar">
                        <img src={comment.owner.profile_image} />
                      </a>
                      <div className="content comment">
                        <h4> {comment.owner.username} </h4>
                        <p>{comment.text}</p>
                      </div>
                      {/* <Link to={`/plants/${params.id}/comment`} className="ui button">Edit</Link> */}
                      <div className="ui divider"/>
                    </div>
                  ))}
                </div>
              </div>
            </>
              }
            </div>
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