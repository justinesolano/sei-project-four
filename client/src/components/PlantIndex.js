import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlantCard from  './PlantCard'

const Plants = () => {

  const [plants, setPlants] = useState(null)
  const [filteredPlants, setFilteredPlants] = useState([])
  const [errors, setErrors] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/plants/')
        setPlants(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleChange = (event) => {
    try {
      const filteredArray = plants.filter(plant => {
        return (plant.plantname.toUpperCase().includes(event.target.value.toUpperCase())) || (plant.maintenancelevel.toUpperCase().includes(event.target.value.toUpperCase())) || (plant.scientificname.toUpperCase().includes(event.target.value.toUpperCase()))
      })
      setFilteredPlants(filteredArray)
      if (filteredArray.length === 0) {
        setErrors('error')
      } 
      if (filteredArray.length > 0) {
        setErrors('')
      }
    } catch (err){
      console.log(err)
    }

  }

  if (!plants) return null

  return (
    <div className="allplants">
      <h1 className="browse">ALL PLANTS</h1>
      <div className="ui search">
        <div className={`ui icon input ${errors}`}>
          <input className="prompt" type="text" placeholder="Find your ideal plant..." onChange={handleChange} />
          <i className="search-icon"></i>
        </div>
        <div className="results"> </div>
      </div>
      <p className="filter-by">Filter by Name or Categories: Almost Unkillable, Easy Care or Needs Love </p>
      <div className="plant-index-parent">
        <div className="ui four column grid cards">
          {(filteredPlants.length > 0 ? filteredPlants : plants).map(plant=> {
            return <div key={plant.id}> <PlantCard key={plant._id} {...plant} /> </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Plants

