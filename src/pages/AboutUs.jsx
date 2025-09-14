import React from 'react'
import AboutUsHero from '../components/AboutUsHero/AboutUsHero'
import './AboutUs.css'
import About from '../components/About/About'

const AboutUs = () => {
  return (
    <div>
      <AboutUsHero/>
      <div className="about-us-container">
      {/* Who Are We Section */}
      <section className="about-us-section" id="who-are-we">
        <h2>Who Are We?</h2>
        <p>
          We are Anjani Purveyors, a dedicated provider of high-quality products with a passion for excellence. 
          Founded in 2021, we have grown from a small startup to a recognized leader in our industry. 
          We offer a diverse range of products and services, ensuring that every customer receives 
          top-tier solutions that meet their needs and exceed expectations.
        </p>
      </section>

      {/* How Can We Help You Section */}
      <section className="about-us-section" id="how-can-we-help">
        <h2>How Can We Help You?</h2>
        <p>
          At Anjani Purveyors, we understand that running a hotel, café, or restaurant means juggling countless responsibilities — and sourcing reliable supplies shouldn’t be one of your worries. That’s where we step in.
        </p>
        <ul>
          <li>One-Stop Solution: From fresh vegetables, fruits, and groceries to sanitary essentials and body care products, we provide everything your kitchen and staff need under one roof.</li>
          <li>Wholesale Prices: We help you cut costs without compromising on quality, offering competitive rates that fit your business budget.</li>
          <li>Consistent Quality: Our carefully sourced products ensure that every dish you serve and every experience you provide meets the highest standards.</li>
          <li>Streamlined Supply Chain: With timely deliveries and hassle-free ordering, we make sure your shelves are stocked and your operations run smoothly.</li>
          <li>Trusted Partner: More than just a supplier, we aim to be your growth partner — supporting you with reliable service so you can focus on delighting your customers.</li>
      
        </ul>
      </section>

      {/* Our Mission Section */}
      <section className="about-us-section" id="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to make a positive impact on our customers’ lives by providing them with 
          high-quality products and exceptional service. We aim to innovate, lead, and continuously improve, 
          ensuring that our customers are always satisfied with our offerings.
        </p>
      </section>

      {/* Our Philosophy Section */}
      <section className="about-us-section" id="our-philosophy">
        <h2>Our Philosophy</h2>
        <p>
          Our business operates on the following guiding principles:
        </p>
        <ul>
          <li><strong>Integrity:</strong> We believe in honesty and transparency in all our business dealings.</li>
          <li><strong>Quality:</strong> We never compromise on the quality of our products and services.</li>
          <li><strong>Customer-Centricity:</strong> Our customers are at the heart of everything we do.</li>
          <li><strong>Innovation:</strong> We constantly innovate to offer cutting-edge solutions.</li>
        </ul>
      </section>
    </div>
    </div>
  )
}

export default AboutUs
