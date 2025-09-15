import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ProductsHero from "../components/ProductsHero/ProductsHero";
import './ProductCatalog.css'; // For grid layout

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

const categoriesData = {
  "Foods and Grocery": [
    {
      title: "Fruits and Vegetables",
      key: "fruits",
      description: "Organic fruits and vegetables, delivered fresh",
      color: "#D8E6F0",
      imageUrl: fruitsImage
    },
    {
      title: "Grains and Pulses",
      key: "grains",
      description: "Whole grains, pulses and flours",
      color: "#F7F7D9",
      imageUrl: grainsIamge
    },
    {
      title: "Tea, Coffee and Spices",
      key: "spices",
      description: "Premium quality tea, coffee, sweeteners and spices",
      color: "#EAE7F6",
      imageUrl: spicesImage
    },
    {
      title: "Oils",
      key: "oils",
      description: "Healthy cooking oils",
      color: "#EAE7F6",
      imageUrl: oilsImage
    },
    {
      title: "Snacks and Beverages",
      key: "beverages",
      description: "Munchkins, crisps and cold drinks for your cravings",
      color: "#EAE7F6",
      imageUrl: snacksImage
    },
  ],
  "Body Care": [
    {
      title: "Oral Care",
      key: "oral",
      description: "Oral hygiene essentials",
      color: "#F2D973",
      imageUrl: toothPasteImage
    },
    {
      title: "Soaps",
      key: "soaps",
      description: "Premium soaps, baby soaps and shower gels",
      color: "#E2C9C9",
      imageUrl: soapsImage
    },
    {
      title: "Handwash",
      key: "handwash",
      description: "Germ protection and gentle handwash",
      color: "#E2C9C9",
      imageUrl: handwashImage
    },
    {
      title: "Skin Care",
      key: "lotions",
      description: "Sunscreen, moisturizers and body lotions for your skin",
      color: "#E2C9C9",
      imageUrl: bodyLotionImage
    },
    {
      title: "Hair Care",
      key: "haircare",
      description: "Shampoos, conditioners, and hair oils",
      color: "#E2C9C9",
      imageUrl: shampooImage
    },
  ],
  "Cleaning and Sanitation": [
    {
      title: "Laundry Essentials",
      key: "laundry",
      description: "Detergent bars, detergent powders and fabric softners",
      color: "#B4D8C7",
      imageUrl: laundryImage
    },
    {
      title: "Dishwashing Gels and Bars",
      key: "dishwash",
      description: "Dishwashing bars, dishwashing powders and dishwashing gels",
      color: "#A0D9F2",
      imageUrl: dishwasherImage
    },
    {
      title: "Toilet and Bathroom Supplies",
      key: "bathroom",
      description: "Toiletries for clean and fresh washrooms",
      color: "#A0D9F2",
      imageUrl: toiletCleanerImage
    },
    {
      title: "Floor and Surface Cleaners",
      key: "floorcleaners",
      description: "Cleaning solutions for clean and fresh homes",
      color: "#A0D9F2",
      imageUrl: surfaceCleanerImage
    },
    {
      title: "Repelents and Disinfectants",
      key: "repelents",
      description: "Safety solutions against bugs, insects and germs",
      color: "#A0D9F2",
      imageUrl: repelentsImage
    },
  ],
};

const ProductCatalog = () => {
  return (

    <div>
      <ProductsHero></ProductsHero>
    <div className="catalog-container">

      {/* Foods and Grocery Section */}
      <section className="category-section">
        <h2 className="section-title">Foods and Grocery</h2>
        <div className="card-grid">
          {categoriesData["Foods and Grocery"].map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              color={category.color}
              imageUrl={category.imageUrl}
              categoryKey={category.key}
            />
          ))}
        </div>
      </section>

      {/* Body Care Section */}
      <section className="category-section">
        <h2 className="section-title">Body Care</h2>
        <div className="card-grid">
          {categoriesData["Body Care"].map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              color={category.color}
              imageUrl={category.imageUrl}
              categoryKey={category.key}
            />
          ))}
        </div>
      </section>

      {/* Cleaning and Sanitation Section */}
      <section className="category-section">
        <h2 className="section-title">Cleaning and Sanitation</h2>
        <div className="card-grid">
          {categoriesData["Cleaning and Sanitation"].map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              color={category.color}
              imageUrl={category.imageUrl}
              categoryKey={category.key}
            />
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default ProductCatalog;