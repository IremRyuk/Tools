import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/News/news.css'

export default function News() {
  return (
    <div className='news'>
       <div className="boxforPhotos">
        <Link to='/todo'>
      <div className="photo-text">
        <img
          className="newsphoto"
          src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="plan-notebook"
        />
        <p className="newsText">Save your favourite list in our page</p>
      </div>
      </Link>
      <Link to='/tools'>
      <div className="photo-text">
        <img
          className="newsphoto"
          src="https://images.pexels.com/photos/4753897/pexels-photo-4753897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="weight"
        />
        <p className="newsText-white">Kg Into Pound</p>
      </div>
      </Link>
    </div>
    </div>
  )
}
