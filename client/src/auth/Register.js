import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default Register
