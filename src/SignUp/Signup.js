import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FiLock} from 'react-icons/fi'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'
import './signup.css'
import { Login } from '../ContextApi/LoginContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [action, setAction] = useState("Sign Up")
  const [showPassword, setShowPassword] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [upperCase, setUpperCase] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [number, setNumber] = useState(false)
  const [specialCharacter, setSpecialChar] = useState(false)
  const navigate = useNavigate()

  const {dispatch} = useContext(Login)

  const [loading, setLoading] = useState(false);

  const LoaderFn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const containsNumber = (pass) => {
    if(/\d/.test(pass)){
      return setNumber(true)
    }
  }

  const containsUpperCase = (pass) => {
    if(/[A-Z]/.test(pass)){
      return setUpperCase(true)
    }
  }

  const containsLowerCase = (pass) => {
    if(/[a-z]/.test(pass)){
      return setLowerCase(true)
    }
  }

  const containsSpecialChar = (pass) => {
    if(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(pass)){
      return setSpecialChar(true)
    }
  }

  const LoginClick = (e) => {
    e.preventDefault()
    if(!Email || !password || !firstName || !lastName){
      setAction("Login")
      setEmail("")
      setPassword("")
    } else {
      LoaderFn()
      sendLoginData()
      navigate("/")
    }
  }

  const sendLoginData = () => {
    dispatch({
      type : "ENTER FIRSTNAME",
      payload : firstName
    })

    dispatch({
      type: "ENTER LASTNAME",
      payload : lastName
    })

    dispatch({
      type : "ENTER EMAIL",
      payload : Email
    })
  }

  const SubmitClick = (e) => {
    e.preventDefault()
    if(!Email || !password || !firstName || !lastName ) {
      setAction("Sign Up")
    } else {
      LoaderFn()
      setAction("Login")
      setEmail("")
      setPassword("")
    }

  }

  useEffect(() => {
    containsNumber(password)
    containsUpperCase(password)
    containsLowerCase(password)
    containsSpecialChar(password)
  }, [password])

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
        ) : (
          <div className='login-container'>
            <div className="log-header">
              <div className="text">
                {action}
              </div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              {action === "Login" ?
                  <div></div> 
                  : 
                  <>
                    <div className="input">
                      <span className="icon">
                        <BsFillPersonFill/>
                      </span>
                      <input value={firstName} type="text" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="input">
                      <span className="icon">
                        <BsFillPersonFill/>
                      </span>
                      <input type="text" value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                    </div> 
                  </>
                }
              <div className="input">
                <span className="icon">
                  <AiOutlineMail/>
                </span>
                <input type="email" value={Email} placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="input">
                <span className="icon">
                  <FiLock/>
                </span>
                <input type={`${showPassword ? "text" : "password"}`} placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span className='icon eye' onClick={togglePassword}>
                  {showPassword ? <AiFillEye/> : <AiFillEyeInvisible/>}
                </span>
              </div>
              {!password ? 
                <div></div> :
                <div className="pass-test">
                  Password:
                  <ul>
                    <li className={`${upperCase ? "passed" : ""}`}>must have uppercase</li>
                    <li className={`${lowerCase ? "passed" : ""}`}>must have lowercase</li>
                    <li className={`${number ? "passed" : ""}`}>must have any number 0-9</li>
                    <li className={`${specialCharacter ? "passed" : ""}`}>must have special character</li>
                  </ul>
                </div>
              }
            </div>
            <div className="forgot-pass">
              Lost Password? <span>Click here!</span>
            </div>
            <div className="submit-container">
              <div className={action === "Login" ? "submit gray" : "submit"} onClick={(e) => SubmitClick(e)}>
                Sign Up
              </div>
              <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={(e) => LoginClick(e)}>
                Login
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Signup
