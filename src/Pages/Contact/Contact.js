import React from 'react'
import './Contact.css'
import ReusableHeader from '../../ReusableHeader'
import {MdEmail} from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import aboutImg from './../../Images/header3.jpg'

const Contact = () => {
  return (
    <>
      <ReusableHeader title="Get In Touch" image={aboutImg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rerum sed amet pariatur, sit rem nesciunt cum libero, quasi consequatur perspiciatis earum quo obcaecati praesentium.
      </ReusableHeader>
      <section className="contact">
        <div className="container contact-con">
          <div className="contact-wrapper">
            <a href="mailto:aribatisejohn8@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://wa.me/+2347053303471" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
