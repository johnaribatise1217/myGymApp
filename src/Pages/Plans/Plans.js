import React from 'react'
import './plans.css'
import ReusableHeader from '../../ReusableHeader';
import image from '../../Images/gallery4.jpg'
import {plans} from './PlansData'
import Card from '../../UI/Card';

const Plans = () => {
  return (
    <>
      <ReusableHeader title="Membership Plans" image={image}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente fuga ducimus nihil facere inventore?
      </ReusableHeader>
      <section className="plans">
        <div className="container plans-con">
          {
            plans.map((plan) => {
              const {id, name, desc, price, features, btn} = plan
              return (
                <Card key={id} children={plan} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map((featureItem, index) => {
                      const {feature, available} = featureItem
                      return (
                        <FeatureParagraph classN={!available ? 'disabled' : ''} children={feature}/>
                      )
                    })
                  }
                  <button style={{cursor : "pointer"}} className='btn lg'>{btn}</button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
};

const FeatureParagraph = ({children , classN}) => {
  return (
    <p className={classN}>{children}</p>
  )
}

export default Plans;
