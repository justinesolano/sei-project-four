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

  const [errors, setErrors] = useState('')

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

  const signUp = () => {
    return axios.post('/api/auth/register/', form)
  }

  const handleSubmit = async event => {
    event.preventDefault
    try {
      await signUp(form)
      const response = await axios.post('/api/auth/login/', 
        { email: form.email, password: form.password })
      window.localStorage.setItem('token', response.data.token)
      history.push('/home')
    } catch (err) {
      setErrors('ui red')
      // window.alert('Your email or username is already in use.')
      // console.log(err)
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
            className={`input ${errors}`}
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
        <button className="ui green button" type="submit">Submit!</button>
      </form>
    </body>
  )
}


export default Register

