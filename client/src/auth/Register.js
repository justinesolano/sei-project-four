import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Register = () => {

  const history = useHistory()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // const [upload, setUpload] = useState(null)

  const handleChange = event => {
    const newForm = { ...form, [event.target.name]: event.target.value }
    setForm(newForm)
  }

  // const fileSelected = event => {
  //   console.log(event.target.files[0])
  // }

  // const fileUpload = () => {
  //   axios.post('')
  // }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/register/', form)
      history.push('/login')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  // email
  // first_name
  // last name
  // username
  // password/confirmation

  return (
    <body className="register-body">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="required field">
          <label>Email</label>
          <input
            className="register-input"
            placeholder="Email"
            type="text"
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
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}  
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            className="register-input"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}  
          />
        </div>
        <div className="required field">
          <label>Username</label>
          <input
            className="register-input"
            placeholder="Username"
            type="text"
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
            name="passwordConfirmation"
            value={form.passwordConfirmation}
            onChange={handleChange}  
          />
        </div>
      </form>
    </body>
  )
}


export default Register

