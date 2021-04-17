import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
// import Select from 'react-select'

const Login = () => {

  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState('')

  const history = useHistory()

  const handleChange = event => {
    const newFormInfo = { ...formInfo, [event.target.name]: event.target.value }
    setFormInfo(newFormInfo)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/login/', formInfo)
      window.localStorage.setItem('token', response.data.token)
      history.push('/home/')
    } catch (err){
      setErrors('button error')
      console.log(err)
    }
  }

  return (
    <body className="register-body">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Email</label>
          <input
            className={`input ${errors}`}
            placeholder="Email"
            type="text"
            name="email"
            value={formInfo.email}
            onChange={handleChange}  
          />
        </div>
      </form>
    </body>
  )
}

export default Login
