import React from 'react'
import './trainers.css'
import ReusableHeader from '../../ReusableHeader';
import { trainers } from './TrainersData';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import image from '../../Images/gallery4.jpg'
import Trainer from './Trainer';

const Trainers = () => {
  return (
    <>
      <ReusableHeader title="Our Trainers" image={image}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eius eos libero commodi rem debitis harum est eligendi.
      </ReusableHeader>
      <section className='trainers'>
        <div className="container trainers-con">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return (
                <Trainer key={id} image={image} name={name}
                  job={job}
                  socials={
                    [
                      {icon : <BsInstagram/>, link : socials[0]},
                      {icon : <AiOutlineTwitter/> , link : socials[1]},
                      {icon : <FaLinkedin/> , link : socials[2]}
                    ]
                  }
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
};

export default Trainers;