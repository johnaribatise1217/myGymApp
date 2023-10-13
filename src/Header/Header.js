import React from 'react'
import '../Pages/Home/home.css'
import { Link } from 'react-router-dom'
import Image from '../Images/header2.jpg'
import WOW from 'wowjs'

new WOW.WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
).init();

const Header = () => {
  return (
    <header className='main-header'>
      <div className="container main-header-con wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">
        <div className="main-header-left">
          <h4>#150 DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Embark on a transformative journey with #150 DaysOfWorkOut. Join our fitness community and become a legend in the world of fitness and wellness.</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main-header-right">
          <div className="header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
