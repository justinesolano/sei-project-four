import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PlantCard from  './PlantCard'
// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'


const Plants = () => {

  const [plants, setPlants] = useState(null)
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

  if (!plants) return null

  return (
    <>
      <h1 className="browse">Browse</h1>
      <div className="plant-index-parent">
        {plants &&
          <div className="ui four column grid cards">
            { plants.map(plant => (
              <div key="plant">
                <PlantCard key={plant._id} {...plant} />
              </div>
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default Plants