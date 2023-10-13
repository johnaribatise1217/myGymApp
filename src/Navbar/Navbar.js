import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../PageLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import { Login } from '../ContextApi/LoginContext'

const Navbar = () => {
  const [isActive, setIsActive] = useState(0)
  const [isNavActive, setIsNavActive] = useState(false)

  const {state : {firstname, lastname, email}, dispatch} = useContext(Login)
  const [checkDetails, setCheckDetails] = useState(false)

  const clickNavLink = (index) => {
    if(isActive === index){
      return setIsActive(null)
    }
    setIsActive(index)
    setIsNavActive(prev => !prev)
  }

  const toggleMenu = () => {
    setIsNavActive(prev => !prev)
  }

  const isThereDetails = () => {
    if(firstname && lastname && email) {
      setCheckDetails(true)
    } else {
      setCheckDetails(false)
    }
  }

  const getInitials = (name) => {
    if(name){
      const nameArray = name.split("")
      return name[0].toUpperCase()
    }
  }

  useEffect(() => {
    isThereDetails()
  })

  return (
    <nav>
      <div className="container nav-con">
        <Link to='/' className='logo' onClick={() => setIsNavActive(false)}>
          GYMLIFT
        </Link>
        <ul className={`navlinks ${isNavActive ? 'show-nav' : 'hide-nav' }`}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index}>
                  <NavLink onClick={() => clickNavLink(index)} className={`${index === isActive ? 'active-nav' : ''}`} to={path}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        {checkDetails ? (
          <>
            <div className="user">
              <div className="initials">
                {getInitials(firstname)} {getInitials(lastname)}
              </div>
              <Link onClick={() => 
                dispatch({
                  type : "SIGN OUT",
                })
              }>
                Sign Out
              </Link>
            </div>
          </>
        ) : 
          (
            <Link to='/signup'>
              <button className='button'>
                SignUp
              </button>
            </Link>
          )
        }
        <button className="navtoggleBtn"
        onClick={() => toggleMenu()}>
          {isNavActive ? <MdClose/> : <GiHamburgerMenu/>}
        </button>
      </div>
    </nav>
  )
};

export default Navbar;
