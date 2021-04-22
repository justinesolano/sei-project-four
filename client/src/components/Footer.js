import React from 'react'
import GA from '../assets/ga.png'
import greenHouse from '../assets/greenhouse.png'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Justine Solano <img src={greenHouse} className="greenhouse"></img><img src={GA} className="ga"></img></p>
      </div>
    </>
  )
}

export default Footer
