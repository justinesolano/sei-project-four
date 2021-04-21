import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import cannotLoad from '../assets/cannotLoad'
// import Slider from 'react-slick'

const CategoryCard = () => {

  const [category, setCategory] = useState(null)

  useEffect(() => {
    const getData = async () => {
      console.log('RESPONSE', category)
      try {
        const response = await axios.get('/api/posts/')
        setCategory(response.data)
        console.log('POSTSS', response.data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])

  return (
    <Link to="/allplants" key="linkcard">
      <div className="ui link cards">
        <div className="card">
          <div className="image card-hover">
            <img src={category.image} alt={cannotLoad} />
            <div className="overlay">
              <div className="description">{category.description}</div>
            </div>
          </div>
          <div className="content">
            <div className="header"> 
              <h2>{`${category.plantname}`}</h2>
            </div>
            <div className="meta"> {category.scientificname} </div>
            <br />
            <span className="avg-price">
        Average price:
              <i className="pound sign icon"></i>
              {`${category.averageprice}`}
            </span>
          </div>
          <div className="extra content">
            <span className="right floated">
              <i className="leaf icon"></i>
              {`${category.maintenancelevel}`}
            </span>
            <span>
              <i className="heart icon"></i>
          decor bonus {`${category.decorativebonus}`}/5
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
