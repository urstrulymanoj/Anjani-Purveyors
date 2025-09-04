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
          At [Company Name], we provide a wide variety of services tailored to meet your needs. 
          Whether you are looking for [Service 1], [Service 2], or [Service 3], we ensure that our solutions 
          are built with quality, reliability, and customer satisfaction in mind. Our products undergo rigorous 
          quality checks to ensure they meet the highest standards.
        </p>
        <ul>
          <li>Service 1: Description of Service 1</li>
          <li>Service 2: Description of Service 2</li>
          <li>Service 3: Description of Service 3</li>
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
