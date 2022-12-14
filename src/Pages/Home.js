import React from 'react'
import '../Styles/Home/home.css'

export default function Home() {
  return (
    <div className='home'>
       <div className="home-box">
        <div className="home-header">
          Welcome to G3RP. Left is navigation bar and you can get access to any
          our product
        </div>
      </div>
      <div className="socialSites">
        <div className="sites">
            <i className="fa-brands fa-whatsapp">
                <a href="tel:+1-925-555-0139"></a>
            </i>
        </div>

        <div className="sites">
            <i className="fa-brands fa-facebook">
                <a href="#"></a>
            </i>
        </div>

        <div className="sites">
            <i className="fa-brands fa-twitter">
                <a href="#"></a>
            </i>
        </div>
    </div>
    </div>
  )
}
