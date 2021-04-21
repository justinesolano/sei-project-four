import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlantCard from  './PlantCard'
import Select from 'react-select'

// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'


const Plants = (/*{ flower, noFlower, almostUnkillable, easyCare, highMaintenance }*/) => {

  const [plants, setPlants] = useState(null)
  const [filteredPlants, setFilteredPlants] = useState([])
  const [errors, setErrors] = useState('')

  // console.log('PLANTS', plants)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/plants/')
        setPlants(response.data)
        console.log('PLANTS DATA', response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleChange = (event) => {
    try {
      const filteredArray = plants.filter(plant => {
        return plant.plantname.toUpperCase().includes(event.target.value.toUpperCase()) || plant.scientificname.toUpperCase().includes(event.target.value.toUpperCase())
        
        /*|| plant.categories.map(category => (category.name.toUpperCase().includes(event.target.value.toUpperCase()))) */
      })
      setFilteredPlants(filteredArray)
      if (filteredArray.length === 0) {
        setErrors('error')
      } else {
        console.log('Yay!')
      }
      console.log(event.target.value)
    } catch (err){
      console.log(err)
    }

  }

  if (!plants) return null

  // var categoryContent = [
  //   { category: flower, title: 'Has flowers' },
  //   { category: noFlower, title: 'No flowers' },
  //   { category: almostUnkillable, title: 'Almost unkillable' },
  //   { category: easyCare, title: 'Easy care' },
  //   { category: highMaintenance, title: 'Needs love' }
  // ]
  const handleMultiChange = (selected, name) => {
    const values = selected ? selected.map(item => item.value) : []
    setFormdata({ ...formdata, [name]: [...values] })
  }

  const [formdata, setFormdata] = useState({
    name: '',
  })

  const selectOptions = [
    { value: 'name', label: 'Flower' },
    { value: 'name', label: 'No Flower' },
    { value: 'name', label: 'Almost Unkillable' },
    { value: 'name', label: 'Easy Care' },
    { value: 'name', label: 'Needs love' }
  ]

  return (
    <>
      <div className="ui search">
        <div className={`ui icon input ${errors}`}>
          <input className="prompt" type="text" placeholder="Find your ideal plant..." onChange={handleChange} />
          <i className="search-icon"></i>
        </div>
        <div className="results"> </div>
        <div className="field">
          <label className="label">Your Breakfast Order</label>
          <div className="control">
            <Select
              options={selectOptions}
              isMulti
              name="breakfastOrder"
              onChange={(selected) => handleMultiChange(selected, 'breakfastOrder')}
            />
          </div>
        </div>
      </div>
      <h1 className="browse">Browse</h1>
      <div className="plant-index-parent">
        {/* {plants && */}
        <div className="ui four column grid cards">
          {(filteredPlants.length > 0 ? filteredPlants : plants).map(plant=> {
            return <div key={plant.id}> <PlantCard key={plant._id} {...plant} /> </div>
          })}
          {/* { plants.map(plant => (
              <div key="plant">
                <PlantCard key={plant._id} {...plant} />
              </div>
            ))} */}
        </div>
        {/* } */}
      </div>
    </>
  )
}

export default Plants