import React from 'react'

const  SlideShow = ( { image } ) => {
  
  return (
    <div className="each-slide">
      <div>
        <span> 
          <img src={image} className="slide-image"/>
        </span>
      </div>
    </div>
  )
}

export default SlideShow
