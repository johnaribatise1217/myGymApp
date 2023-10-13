import React, { useState } from 'react'
import '../Pages/Home/home.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {ImQuotesLeft} from 'react-icons/im'
import { testimonialData } from '../PageLinks'

const Testimonial = () => {
  const [index, setIndex] = useState(0)
  const {name, id, avatar, job, quotes} = testimonialData[index]

  const prevTestimonialClick = () => {
    setIndex(prev => prev - 1)
    if(index < 0){
        setIndex(testimonialData.length - 1)
    }
  }

  const nextTestimonialClick = () => {
    setIndex(prev => prev + 1)
    if(index >= testimonialData.length - 1) {
        setIndex(0)
    }
  }

  return (
    <section className="testimonials">
        <div className="container test-con">
            <SectionHeader className='test-head' icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="testimonial">
                <div className="test-avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="test-quote">
                    {`"${quotes}"`}
                </p>
                <h5>{name}</h5>
                <small className='test-title'>{job}</small>
            </Card>
            <div className="test-btns">
                <button className="testbtn" onClick={prevTestimonialClick}>
                    <IoIosArrowDropleftCircle/>
                </button>
                <button className="testbtn" onClick={nextTestimonialClick}>
                    <IoIosArrowDroprightCircle/>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
