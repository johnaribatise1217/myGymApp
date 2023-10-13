import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../PageLinks'
import Card from '../UI/Card'
import Image from '../Images/workout1.jpg'
import '../Pages/Home/home.css'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values-con">
            <div className="values-left">
                <img src={Image} className='values-image' alt="Values Image" />
            </div>
            <div className="values-right">
                <SectionHeader icon={<GiCutDiamond/>} title="Values"/>
                <p>GYMLIFT is known for our strong driven values in maintaining a healthy and fulfilling workout habit.</p>
                <div className="values-wrapper">
                    {
                        values.map(({id, icon, title, description}) => {
                            return (
                                <Card className='values-value' key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{description}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
