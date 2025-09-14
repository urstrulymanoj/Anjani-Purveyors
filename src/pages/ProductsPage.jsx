import React, { useState, useEffect } from "react";
// Assuming ProductsPageHero is imported from a separate file as per your code
import ProductsPageHero from "../components/ProductsPageHero/ProductsPageHero";
import "./ProductsPage.css";
import "./ProductsPopUp.css"; // Import the new CSS file
import productsData from "./ProductsData.json";

// Reusable ProductCard component
const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
    </div>
  </div>
);

// New component for the product details pop-up
const ProductDetailsPopup = ({ product, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.imageUrl} alt={product.name} className="modal-image" />
        <div className="modal-details">
          <h3 className="modal-name">{product.name}</h3>
          <p className="modal-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("fruits");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtersByCategory = {
    fruits: ["All", "Fresh Fruits", "Exotic Fruits", "Dry Fruits", "Fresh Vegetables", "Exotic Vegetables"],
    grains: ["All", "Whole Grains", "Lentils", "Beans", "Flours", "Gluten Free Flours"],
    spices: ["All", "Tea & Coffee", "Sweetners", "Whole Spices", "Powder Spices", "Exotic Spices"],
    oils: ["All", "Everyday Oils", "Premium Oils"],
    beverages: ["All", "Chips & Crsips", "Chocolates & Cookies", "Papad & Fryums", "Spreads & Sauces", "Soft Drinks"],
    oral: ["All", "Tooth Paste", "Mouth Wash"],
    soaps: ["All", "Herbal Soaps", "Baby Soaps", "Shower Gels"],
    handwash: ["All"],
    lotions: ["All", "Moisturizers", "Sunscreens"],
    haircare: ["All", "Shampoos", "Conditioners", "Hair Oils"],
    laundry: ["All", "Detegrent Soaps", "Detergent Powders", "Detergent Liquids", "Fabric Softners"],
    dishwash: ["All", "Dishwash Bars", "Dishwash Powders", "Dishwash Gels"],
    bathroom: ["All", "Toilet Cleaners", "Bathroom Cleaners"],
    floorcleaners: ["All", "Floor Cleaners", "Surface Cleaners", "Room Freshners"],
    repelents: ["All", "Machines & Refills", "Sprays", "Gels", "Disinfectants"]
  };

  useEffect(() => {
    // Filter products based on selected category and sub-category
    let productsInSelectedCategory = productsData.filter(
      (product) => product.category === selectedCategory
    );

    if (selectedFilter !== "All") {
      productsInSelectedCategory = productsInSelectedCategory.filter(
        (product) => product.subCategory === selectedFilter
      );
    }
    setFilteredProducts(productsInSelectedCategory);
  }, [selectedCategory, selectedFilter]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <ProductsPageHero />

      {/* Main Section with Sidebar + Content */}
      <div className="products-container">
        {/* Sidebar */}
        <aside className="products-sidebar">
          {/* Dropdown */}
          <div className="categories-dropdown">
            <h2 className="dropdown-label">Categories</h2>
            <select
              id="categories"
              className="dropdown-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedFilter("All");
              }}
            >
              <option value="fruits">Fruits and Vegetables</option>
              <option value="grains">Grains and Pulses</option>
              <option value="spices">Spices</option>
              <option value="oils">Oils</option>
              <option value="beverages">Snacks and Beverages</option>
              <option value="oral">Oral Care</option>
              <option value="soaps">Soaps</option>
              <option value="handwash">Handwash</option>
              <option value="lotions">Lotions</option>
              <option value="haircare">Haircare</option>
              <option value="laundry">Laundry Supplies</option>
              <option value="dishwash">Dishwash Supplies</option>
              <option value="bathroom">Bathroom Supplies</option>
              <option value="floorcleaners">Floor and Surface Cleaners</option>
              <option value="repelents">Repelents and Disinfectants</option>
            </select>
          </div>

          {/* Dynamic Filters */}
          <h2 className="sidebar-title">Filters</h2>
          <div className="filter-options">
            {filtersByCategory[selectedCategory].map((filter, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="subcategory"
                  value={filter}
                  checked={selectedFilter === filter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                />
                <span>{filter}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="products-content">
          <h1 className="content-title">Our Products</h1>
          <p className="content-subtitle">
            Showing products for <strong>{selectedCategory}</strong>
          </p>
          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleCardClick(product)} />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        </main>
      </div>

      {isPopupOpen && (
        <ProductDetailsPopup product={selectedProduct} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default ProductsPage;