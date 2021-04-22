import axios from 'axios'
import React, { useState } from 'react'
import { ImageUploadField } from './ImageUpload'


const MakePost = () => {

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    tags: '',
  })

  const [errors, setErrors] = useState('')

  const handleChange = (event) => {
    const newForm = { ...formData, [event.target.name]: event.target.value }
    setFormData(newForm)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post('/api/posts/', formData, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      location.reload()
      console.log('POSTED', response)
      setErrors('button error')
    } catch (err) {
      console.log(err)
    }
  }


  const handleImageUrl = url => {
    setFormData({ ...formData, image: url })
  }
  


  return (
    <div className="new-post-page">
      <div className="register-body">
        <div className="make-post-white">
          <h1 className="new-post">New Post</h1>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="required field">
              <label>Title</label>
              <input
                className={`input ${errors}`}
                placeholder="Title"
                // type="email"
                name="title"
                value={formData.title}
                onChange={handleChange}  
              />
            </div>
            <div className="required">
              <label>
                <i className="ui upload icon"> </i>
                <label>Image</label>
              </label>
              <ImageUploadField
              // type="file"
              // className="post-image"
              // placeholder="Image"
                name="image"
                value={formData.image}
                onChange={handleChange} 
                handleImageUrl={handleImageUrl} 
              />
            </div>
            <div className="field">
              <label>Tags</label>
              <input
                className={`input ${errors}`}
                placeholder="Tags"
                // type="email"
                name="tags"
                value={formData.tags}
                onChange={handleChange}  
              />
            </div>
            <button className="ui button register" type="submit">Submit!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MakePost
