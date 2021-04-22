import axios from 'axios'
import React, { useState } from 'react'
import { getTokenFromLocalStorage } from '../helpers/auth'

const Comment = () => {

  const plantId = window.location.href
  const id = plantId.substr(plantId.length - 1)

  const [formData, setFormData] = useState({
    text: '',
    plant: `${id}`,
  })


  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/comments/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log('COMMENT', response)
      location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field-body comment">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                onChange={handleChange}
                name="text"
                placeholder="Leave a comment"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="button-comment-submit">
          <button className="ui button green comment" type="submit">
          Submit Comment
          </button>
        </div>
      </form>
    </>
  )
}

export default Comment