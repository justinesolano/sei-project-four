import axios from 'axios'
import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { getTokenFromLocalStorage } from './helpers/auth'
import { ImageUploadField } from './ImageUpload'


const MakePost = () => {

  // const profileId = window.location.href
  // const profile = profileId.substr(profileId.length - 1)

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    tags: '',
  })

  // const history = useHistory()
  const [errors, setErrors] = useState('')

  const handleChange = (event) => {
    const newForm = { ...formData, [event.target.name]: event.target.value }
    setFormData(newForm)
    console.log('FORM', newForm)
  }


  const handleSubmit = async (event) => {
    console.log('FORM DATA', formData)
    event.preventDefault()
    
    try {
      const response = await axios.post('/api/posts/', formData, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      })
      // history.push(`/api/auth/profile/${profile}`)
      location.reload()
      console.log('POSTED', response)
      setErrors('button error')
      // history.push(`/plants/${params.id}`)
    } catch (err) {
      console.log(err)
    }
  }


  const handleImageUrl = url => {
    setFormData({ ...formData, image: url })
  }
  
  // imagePath = file.value.replace('C:\\fakepath\\', '')


  return (
    <>
      <h1>New Post</h1>
      <div className="register-body">
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
            Image
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
          <button className="ui green button" type="submit">Submit!</button>
        </form>
      </div>
    </>
  )
}

export default MakePost
