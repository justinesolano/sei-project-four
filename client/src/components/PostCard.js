import React from 'react'
// import { Link } from 'react-router-dom'


const PostCard = ({ title, image, owner }) => {


  return (
    <>
      {/* <Link to={`/profile/${id}`} key="linkcard"> */}
      <div className="ui link cards">
        <div className="card">
          <div className="content">
            <div className="header"> 
              <h2>{`${title}`}</h2>
            </div>
            <br />
          </div>
          <div className="extra content">
            <img src={image}></img>
          </div>
          <p>{owner.username}</p>
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}

export default PostCard
