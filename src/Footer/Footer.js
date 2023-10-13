import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo1.jpg'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import '../Pages/Home/home.css'

const Footer = () => {
  return (
    <footer>
        <div className="container footer-con">
            <article>
                <Link to='/' className='logo'>
                    <img src={logo} alt="Footer logo." />
                </Link>
                <p>Empower yourself with our fitness programs. Join our community of enthusiasts today and embark on a journey to a healthier you.</p>
                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/john-aribatise-2b2609287" target='_blank' rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://instagram.com/jonofficial._" target='_blank' rel='noreferrer noopener'>
                        <FaInstagram/>
                    </a>
                    <a href="https://twitter.com/" target='_blank'>
                        <AiOutlineTwitter/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalink</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div> 
        <div className="copyright">
            <small>2023 ARIBADEV &copy; All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
