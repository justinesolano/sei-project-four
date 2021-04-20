import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlantShow = () => {

  const [plant, setPlant] = useState(null)
  const [newComment, setNewComment] = useState({
    text: '',
    plant: '',
  })
  const params = useParams()
  // (/api/plants/${id}/`)

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

  const handleComment = async () => {
    const postComment = async () => {

      try {
        const token = window.localStorage.getItem('token')
        console.log('TOKEN', token)
        await axios.post('/api/comments', newComment, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        window.location.reload()
      } catch (err) {
        console.log(err)
      }
    }
    postComment()
  }

  const handleChange = (event) => {
    const comment = { ...newComment, [event.target.name]: event.target.value }
    setNewComment(comment)
  }

  console.log('PLANTS ID', plant)


  return (
    <>
      { plant ? 
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
          <h2>Comments</h2>
          { newComment &&
          <div>
            { newComment[0].text.map(comment => (
              <form className="ui form" key={comment[0].text} onSubmit={handleComment}>
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
          }
        </div>
        :
        <h1>Something went wrong!</h1>
      }
    </>
  )
}

export default PlantShow
