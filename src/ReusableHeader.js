import React from 'react'

const ReusableHeader = ({title, image, children}) => {
  return (
    <header className="header">
        <div className="header-con">
            <div className="header-con-bg">
                <img src={image} alt="Background Image"/>
            </div>
            <div className="header-content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  )
}

export default ReusableHeader
