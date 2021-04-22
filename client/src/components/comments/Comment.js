import axios from 'axios'
import React, { useState } from 'react'
// import { useParams } from 'react-router'
import { getTokenFromLocalStorage } from '../helpers/auth'

const Comment = () => {

  // const history = useHistory()

  const plantId = window.location.href
  const id = plantId.substr(plantId.length - 1)
  console.log('PLANT ID', plantId)

  const [formData, setFormData] = useState({
    text: '',
    plant: `${id}`,
  })


  // const params = useParams()

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = async (event) => {
    console.log('FORM DATA', formData)
    event.preventDefault()
    try {
      const response = await axios.post('/api/comments/', formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      console.log('COMMENT', response)
      location.reload()
      // history.push(`/plants/${params.id}`)
    } catch (err) {
      console.log(err)
    }
  }

  // const [plant, setPlant] = useState(null)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field-body comment">
          <div className="field">
            <div className="control">
              {/* <h2 className="plant" name="plantname" > {formData.plant} </h2> */}
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






// import React from 'react'

// const Comment = ({ handleChange, handleSubmit, formData, username }) => {
//   return (
//     <div>
//       <form className="ui form" key="comment" onSubmit={handleSubmit}>
//         <div className="field">
//           {/* <label>Comments</label> */}
//           <label>Username: {username} </label>
//           <input
//             className="input"
//             type="text"
//             name="text"
//             placeholder="Leave a comment..."
//             value={formData.text}
//             onChange={handleChange}
//             formData={formData}
//           />
//           <button className="ui green button" type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Comment
