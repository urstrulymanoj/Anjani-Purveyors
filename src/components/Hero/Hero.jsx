import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>One Source. Every Supply. Always Fresh.</h1>
            <p>We are your one-stop solution for all fresh grocery and vegetable needs, supplying restaurants, cafes, and hotels with premium-quality produce at the most competitive prices. From farm to kitchen, we streamline your supply chain with reliable delivery, consistent quality, and unbeatable value — helping your business serve freshness every day without breaking the budget.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
