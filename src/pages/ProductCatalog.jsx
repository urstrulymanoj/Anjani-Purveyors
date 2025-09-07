import React from 'react';
import ProductsHero from '../components/ProductsHero/ProductsHero';
import './ProductCatalog.css';

// Importing images from the assets folder
import fruitsImage from '../assets/FruitCategory.png';
import snacksImage from '../assets/SnacksCategory.png';
import spicesImage from '../assets/spices2.png';
import oilsImage from '../assets/oils2.jpeg';
import grainsIamge from '../assets/GrainsCategory.png'
import toothPasteImage from '../assets/toothpaste1.png'
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
              title="Fruits and Vegetables" 
              description="Fresh fruits, dry fruits and vegetables" 
              backgroundImage={fruitsImage} 
            />
            <Card 
              title="Grains and Pulses" 
              description="Whole Grains, pulses and flours" 
              backgroundImage={grainsIamge} 
            />
            <Card 
              title="Tea, Coffee and Spices" 
              description="Premium quality spices" 
              backgroundImage={spicesImage} 
            />
            <Card 
              title="Oils" 
              description="Healthy cooking oils" 
              backgroundImage={oilsImage} 
            />
            <Card 
              title="Snacks and Beverages" 
              description="Munchkins, crisps and cold drinks" 
              backgroundImage={snacksImage} 
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
              description="Dishwashing Solutions" 
              backgroundImage={dishwasherImage} 
            />
            <Card 
              title="Toilet and Bathroom Supplies" 
              description="Toiletries for clean and fresh washrooms" 
              backgroundImage={toiletCleanerImage} 
            />
            <Card 
              title="Floor and Surface Cleaners" 
              description="Cleaning solutions for clean and fresh homes" 
              backgroundImage={surfaceCleanerImage} 
            />
            <Card 
              title="Repelents and Disinfectants" 
              description="Safety solutions against bugs, insects and germs" 
              backgroundImage={repelentsImage} 
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCatalog;