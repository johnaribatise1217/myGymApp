import React, {useEffect} from 'react'
import './About.css'
import ReusableHeader from '../../ReusableHeader'
import about from '../../Images/about.jpg'
import vision from '../../Images/vision.jpg'

const About = ({img}) => {
  const handleScroll = () => {
    const aboutSection = document.querySelector('.about-story');
    const visionSection = document.querySelector('.about-vision');
    const scrollPosition = window.scrollY;

    // Adjust the background position based on scroll position
    aboutSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    visionSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <>
      <ReusableHeader title="About Us" image={img}>
        Welcome to our fitness community! We're dedicated to helping you achieve your health goals through tailored workouts and expert guidance
      </ReusableHeader>
      <section className="about-story">
        <div className="container abt-story-container">
          <div className="about-section-img">
            <img src={about} alt="Our Story Image." />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>Our journey began with a shared commitment to health and well-being. Over the years, we've evolved into a thriving fitness community that's passionate about transforming lives.</p>
            <p>Our experienced trainers bring a wealth of knowledge and innovation to the table, ensuring that every workout is both effective and enjoyable. We believe that fitness should be accessible to everyone, regardless of their fitness level or background. Whether you're a beginner or a seasoned athlete..</p>
            <p>Join us on this incredible journey of self-improvement. Whether you're looking to shed a few pounds, build muscle, or simply adopt a healthier lifestyle, we're here to support you every step of the way.</p>
          </div>
        </div>
      </section>
      <section className="about-vision">
        <div className="container abt-vision-container">
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>Our vision is to create a world where fitness is not just a routine but a way of life. We aspire to inspire individuals to prioritize their health and well-being, leading to happier and more fulfilled lives.</p>
            <p>We're committed to building a supportive and inclusive fitness community that welcomes individuals from all walks of life. Our goal is to break down barriers to fitness and provide the resources and motivation needed to make lasting, positive changes.</p>
            <p>Through continuous innovation, personalized guidance, and a strong sense of community, we aim to be the driving force behind countless success stories. Our vision is to see individuals achieve their health and fitness goals and experience the incredible benefits of an active and balanced lifestyle.</p>
          </div>
          <div className="about-section-img">
            <img src={vision} alt="Our Vison Image." />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
