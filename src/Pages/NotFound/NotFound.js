import React from 'react'
import './notfound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return ( 
    <section>
      <div className="container notfound-con">
        <h1>Page Not Found</h1>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
};

export default NotFound;
