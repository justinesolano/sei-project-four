import React from 'react'
// import { useParams } from 'react-router-dom'
import cannotLoad from '../assets/cannotload.png'
// import Plants from './PlantIndex'

const PlantCard = ({ plantname, scientificname, image, maintenancelevel, decorativebonus,averageprice }) => {

  console.log('maintenanceLevel', maintenancelevel)

  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src={image} alt={cannotLoad} />
        </div>
        <div className="content">
          <div className="header"> 
            <h2>{`${plantname}`}</h2>
          </div>
          <div className="meta"> {scientificname} </div>
          <br />
          <span className="avg-price">
            Average price:
            <i className="pound sign icon"></i>
            {`${averageprice}`}
          </span>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="leaf icon"></i>
            {`${maintenancelevel}`}
          </span>
          <span>
            <i className="heart icon"></i>
              decor bonus {`${decorativebonus}`}/5
          </span>
        </div>
      </div>
    </div>
  )
}

export default PlantCard
