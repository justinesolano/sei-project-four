import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlantShow = () => {

  const [plant, setPlant] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/plants/${id}/`)
        setPlant(response.data)
        console.log('PLANTS DATA RESPONSE', response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('PLANTS ID', plant)

  const { plantname, image } = plant

  return (
    <div>
      <h1 className="plant-name">{plantname}</h1>
      <img src={image} alt={plantname} className="plant-image"/>
      {/* <h1>{ plantnam }</h1> */}
    </div>
  )
}

export default PlantShow
