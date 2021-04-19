import React from 'react'

const FavouriteCard = ({ image }) => {
  return (
    <div>
      <div className="each-slide">
        <div>
          <span> 
            <img src={image} className="slide-image"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FavouriteCard
