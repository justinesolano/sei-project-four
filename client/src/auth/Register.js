import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { ImageUploadField } from '../components/ImageUpload'


const Register = () => {
  const [form, setForm] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
    posts: [],
  })

  const history = useHistory()

  const handleChange = (event) => {
    const newForm = { ...form, [event.target.name]: event.target.value }
    setForm(newForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('HISTORY', history)
    try {
      // await axios.post('/api/auth/register/', form)
      const response = await axios.post('/api/auth/register/', form)
      const responseTwo = await axios.post('/api/auth/login/', { email: form.email, password: form.password })
      window.localStorage.setItem('token', JSON.stringify(response.data.token))
      window.localStorage.setItem('token', JSON.stringify(responseTwo.data.token))
      history.push('/login')
      location.reload()
    } catch (err) {
      setErrors('button error')
      window.alert('Your email or username is already in use.')
      console.log(err)
    }
  }

  const [errors, setErrors] = useState('')

  const handleImageUrl = url => {
    setForm({ ...form, profile_image: url })
  }

  return (
    <>
      <h1>Register</h1>
      <div className="register-body">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="required field">
            <label>Email</label>
            <input
              className={`input ${errors}`}
              placeholder="Email"
              // type="email"
              name="email"
              value={form.email}
              onChange={handleChange}  
            />
          </div>
          <div className="required field">
            <label>First Name</label>
            <input
              className="register-input"
              placeholder="First Name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}  
            />
          </div>
          <div className="field required">
            <label>Last Name</label>
            <input
              className="register-input"
              placeholder="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}  
            />
          </div>
          <div className="required field">
            <label>Username</label>
            <input
              className="register-input"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={handleChange}  
            />
          </div>
          <div className="required field">
            <label>Password</label>
            <input
              className="register-input"
              placeholder="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}  
            />
          </div>
          <div className="required field">
            <label>Confirm your password</label>
            <input
              className="register-input"
              placeholder="Password Confirmation"
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}  
            />
            <div className="required">
              <label>
                <i className="ui upload icon"> </i>
            Image
              </label>
              <ImageUploadField
              // type="file"
              // className="post-image"
              // placeholder="Image"
                name="profile_image"
                value={form.profile_image}
                onChange={handleChange} 
                handleImageUrl={handleImageUrl} 
              />
            </div>
            <div className="post-field">
              <label>
                <i className="ui upload icon"> </i>
            Posts
              </label>
              <input
              // type="file"
              // className="post-image"
              // placeholder="Image"
                name="posts"
                value={form.posts}
                onChange={handleChange} 
                handleImageUrl={handleImageUrl} 
              />
            </div>
          </div>
          <button className="ui green button" type="submit">Submit!</button>
        </form>
      </div>
    </>
  )
}


export default Register

