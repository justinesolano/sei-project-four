import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlantShow = () => {

  const [plant, setPlant] = useState(null)
  const params = useParams()
  // (/api/plants/${id}/`)

  useEffect(() => {
    const getData = async () => {
      console.log('PARAMS', params)
      try {
        const { data } = await axios.get(`/api/plants/${params.id}`)
        setPlant(data)
        console.log('PLANTS DATA RESPONSE', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [params.id])

  console.log('PLANTS ID', plant)


  return (
    <>
      { plant ? 
        <div>
          <h1 className="plant-name">{plant.plantname}</h1>
          <h2> {plant.scientificname} </h2>
          <h2> {plant.family} </h2>
          <img src={plant.image} alt={plant.plantname} className="plant-image"/>
          <p> {plant.size} </p> <p> {plant.maintenancelevel} </p>
          <p> Best suited: {plant.bestsuited} </p>
          <p> {plant.averageprice} </p>
          <p> {plant.description} </p>
          <p> {plant.careinstructions} </p>
        </div>
        :
        <h1>Something went wrong!</h1>
      }
    </>
  )
}

export default PlantShow
