import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const Login = () => {

  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState('')

  const history = useHistory()

  const handleChange = (event) => {
    const newFormInfo = { ...formInfo, [event.target.name]: event.target.value }
    setFormInfo(newFormInfo)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/auth/login/', formInfo)
      window.localStorage.setItem('token', response.data.token)
      history.push('/')
      location.reload()
    } catch (err){
      setErrors('button error')
      console.log(err)
    }
  }

  return (
    <div className="login-page">
      <div className="login-body">
        <div className="login-white">
          <h1 className="login-title">Login</h1>
          <form className="ui form login" onSubmit={handleSubmit}>
            <div className="field">
              <label className="field-title-two">Email</label>
              <input
                className={`input ${errors}`}
                placeholder="Email"
                type="email"
                name="email"
                value={formInfo.email}
                onChange={handleChange}  
              />
            </div>
            <div className="field">
              <label className="field-title-two">Password</label>
              <input
                className={`input ${errors}`}
                placeholder="Password"
                type="password"
                name="password"
                value={formInfo.password}
                onChange={handleChange}  
              />
            </div>
            <button className="ui login button" type="submit">Submit!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
