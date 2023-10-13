import React from 'react'
import {GiQueenCrown} from 'react-icons/gi'
import SectionHeader from '../SectionHeader/SectionHeader'
import { programs } from '../PageLinks'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'
import '../Pages/Home/home.css'
import WOW from 'wowjs'

new WOW.WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
).init()

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container programs-con">
            <SectionHeader icon={<GiQueenCrown/>} title="Programs"/>
            <div className="programs-wrapper wow slideInLeft"  data-wow-iteration="1" data-wow-duration="2s" data-wow-delay="1s">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="programs-program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className='btn sm'>Learn More <AiFillCaretRight/></Link>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Programs
