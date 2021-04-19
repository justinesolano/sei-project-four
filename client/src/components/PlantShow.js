import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlantShow = () => {

  const [plant, setPlant] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/plants/${params.id}`)
        setPlant(response.data)
        console.log('PLANTS DATA', response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('PLANTS ID', plant)

  // const { plantname } = plant

  return (
    <div>
      <h1>Plant</h1>
      <h1>Hello</h1>
    </div>
  )
}

export default PlantShow
