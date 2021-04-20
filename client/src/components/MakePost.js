// import React, { useState } from 'react'

// const MakePost = () => {

//   const [formData, setFormData] = useState({
//     title: '',
//     image: '',
//     tags: '',
//     categories: '',
//   })

//   const history = useHistory()


//   const handleChange = (event) => {
//     const newForm = { ...form, [event.target.name]: event.target.value }
//     setForm(newForm)
//   }

//   const handleSubmit = async (event) => {
//     console.log('FORM DATA', formData)
//     event.preventDefault()
//     try {
//       const response = await axios.post('/api/comments/', formData, {
//         headers: {
//           Authorization: `Bearer ${getTokenFromLocalStorage()}`,
//         },
//       })
//       console.log('COMMENT', response)
//       // history.push(`/plants/${params.id}`)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       Post
//     </div>
//   )
// }

// export default MakePost

import React from 'react'

const MakePost = () => {
  return (
    <div>
      
    </div>
  )
}

export default MakePost

