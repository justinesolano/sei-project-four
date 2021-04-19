import React from 'react'

const  Slide = ( { image } ) => {
  return (
    <div>
      <div className="each-slide">
        <div>
          <span> 
            <img src={image} />
            Hello
          </span>
        </div>
      </div>
    </div>
  )
}

export default  Slide
