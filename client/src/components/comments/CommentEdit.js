import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'

const CommentEdit = () => {

  const history = useHistory()
  const params = useParams()


  const plantId = window.location.href
  const id = plantId.substr(plantId.length - 1)

  const [formData, setFormData] = useState({
    text: '',
    plant: `${id}`,
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/plants/${params.id}/`)
        setFormData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [params.id])

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(
      `/api/plants/${id}/comment/`, formData,
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      }
    )
    history.push(`/plants/${params.id}`)
  }


  return (
    <div>
      <h1>Comment Edit</h1>
      <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="field">
          <div className="control">
            <input
              className="input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              formData={formData}
            />
            <button className="submit"> Submit </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentEdit
