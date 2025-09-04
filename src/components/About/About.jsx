import React from 'react'
import './About.css'
import about_img from '../../assets/about1.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>
          {setPlayState(true)}}/>
      </div>

      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>From Farm to Kitchen, Everything You Need, All in One Place.</h2>
        <p>Welcome to Anjani Purveyors, your trusted one-stop destination for premium-quality food supplies. 
        Whether you're a restaurant, café, or hotel, we provide a seamless and affordable solution to meet all your kitchen needs.
        From exotic fruits and farm-fresh vegetables to rare spices and everyday groceries, we bring you an extensive selection of ingredients delivered right to your doorstep—saving you time, effort, and cost.
        </p>
        <p>Our mission is to simplify sourcing for food service professionals by offering consistent quality, competitive prices, and reliable service.
        Backed by a dedicated supply chain and strong partnerships with local farmers and global producers, we ensure that your kitchen stays stocked with only the best.
        At Anjani Purveyors, we believe great food starts with great ingredients—let us take care of the rest.</p>
      </div>
    </div>
  )
}

export default About
