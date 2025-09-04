//import React from 'react'
import React, { useState } from 'react';
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Title from '../components/Title/Title'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'

const Home = () => {

    const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PRODUCTS' title='WHAT WE OFFER'/>
        <Products/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='TESTIMONIALS' title='WHAT OUR CUSTOMERS SAYS'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' title='GET IN TOUCH'/>
        <Contact/>
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
      
  )
}

export default Home
