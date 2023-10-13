import React from 'react'
import './gallery.css'
import ReusableHeader from '../../ReusableHeader'
import about from '../../Images/about.jpg'

const Gallery = () => {
  const gallerySize = 6
  const images = []

  for(let i =1 ; i <= gallerySize; i++){
    images.push(require(`./../../Images/gallery${i}.jpg`))
  }
  
  return (
    <>
      <ReusableHeader title="Our Gallery" image={about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum voluptas accusamus blanditiis autem aliquam atque debitis quas quidem maiores.
      </ReusableHeader>
      <section className='gallery container'>
        <div className="gallery-con">
            {images.map((img,index) => {
            return (
              <article key={index}>
                <img src={img} alt={`Gallery Image ${index + 1}`}/>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery
