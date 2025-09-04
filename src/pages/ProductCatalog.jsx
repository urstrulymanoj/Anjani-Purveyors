import React from 'react';
import ProductsHero from '../components/ProductsHero/ProductsHero';
import './ProductCatalog.css';

// Importing images from the assets folder
import fruitsImage from '../assets/fruits1.jpg';
import vegetablesImage from '../assets/veges1.jpg';
import dryFruitsImage from '../assets/dryFruits2.jpg';
import spicesImage from '../assets/spices2.png';
import oilsImage from '../assets/oils2.jpeg';
import toothPasteImage from '../assets/toothPaste1.png'
import soapsImage from '../assets/soaps2.png'
import handwashImage from '../assets/handwash2.png'
import bodyLotionImage from '../assets/bodylotions1.png'
import shampooImage from '../assets/shampoo1.png'
import laundryImage from '../assets/laundry1.png'
import dishwasherImage from '../assets/dishwasher1.png'
import toiletCleanerImage from '../assets/toiletCleaner1.png'
import surfaceCleanerImage from '../assets/floorCleaners1.png'
import repelentsImage from '../assets/repelant1.png'



// Card component to display each product category
const Card = ({ title, description, backgroundImage }) => (
  <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ProductCatalog = () => {
  return (
    <div>
      <ProductsHero />
      <div>
        
        {/* Food Category Section */}
        <section className="food-section">
          <h2>Food and Grocery</h2>
          <div className="cards-container">
            <Card 
              title="Fruits" 
              description="Fresh, juicy fruits" 
              backgroundImage={fruitsImage} 
            />
            <Card 
              title="Vegetables" 
              description="Organic and healthy veggies" 
              backgroundImage={vegetablesImage} 
            />
            <Card 
              title="Dry Fruits" 
              description="Nutrient-rich dry fruits" 
              backgroundImage={dryFruitsImage} 
            />
            <Card 
              title="Spices" 
              description="Premium quality spices" 
              backgroundImage={spicesImage} 
            />
            <Card 
              title="Oils" 
              description="Healthy cooking oils" 
              backgroundImage={oilsImage} 
            />
          </div>
        </section>

        {/* Body and Personal Care Category Section */}
        <section className="food-section">
          <h2>Body and Personal Care</h2>
          <div className="cards-container">
            <Card 
              title="Oral Care" 
              description="Oral hygiene essentials" 
              backgroundImage={toothPasteImage} 
            />
            <Card 
              title="Soaps" 
              description="Organic and premium soaps" 
              backgroundImage={soapsImage} 
            />
            <Card 
              title="Handwash" 
              description="Germ protection and gentle handwash" 
              backgroundImage={handwashImage} 
            />
            <Card 
              title="Body Lotions" 
              description="Premium quality body lotions" 
              backgroundImage={bodyLotionImage} 
            />
            <Card 
              title="Hair Care" 
              description="Premium hair care products" 
              backgroundImage={shampooImage} 
            />
          </div>
        </section>

        {/* Cleaning and Sanitation Products Category Section */}
        <section className="food-section">
          <h2>Cleaning and Sanitation</h2>
          <div className="cards-container">
            <Card 
              title="Laundry Essentials" 
              description="Fabric cleaning solutions" 
              backgroundImage={laundryImage} 
            />
            <Card 
              title="Dishwashing Gels and Bars" 
              description="Organic and premium soaps" 
              backgroundImage={dishwasherImage} 
            />
            <Card 
              title="Toilet and Bathroom Supplies" 
              description="Germ protection and gentle handwash" 
              backgroundImage={toiletCleanerImage} 
            />
            <Card 
              title="Floor and Surface Cleaners" 
              description="Premium quality body lotions" 
              backgroundImage={surfaceCleanerImage} 
            />
            <Card 
              title="Repelents and Disinfectants" 
              description="Premium hair care products" 
              backgroundImage={repelentsImage} 
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCatalog;