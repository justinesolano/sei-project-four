import React from 'react'
import cannotLoad from '../assets/cannotload.png'
import { Link } from 'react-router-dom'


const PlantCard = ({ id, plantname, scientificname, image, maintenancelevel, decorativebonus,averageprice, description }) => {

  return (
    <>
      <Link to={`/plants/${id}`} key="linkcard">
        <div className="ui link cards">
          <div className="card">
            <div className="image card-hover">
              <img src={image} alt={cannotLoad} />
              <div className="overlay">
                <div className="description">{description}</div>
              </div>
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
      </Link>
    </>
  )
}

export default PlantCard
