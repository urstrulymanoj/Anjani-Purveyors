import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Assuming ProductsPageHero is imported from a separate file as per your code
import ProductsPageHero from "../components/ProductsPageHero/ProductsPageHero";
import "./ProductsPage.css";
import "./ProductsPopUp.css"; // Import the new CSS file
import productsData from "./FruitsData.json";

// ... (ProductCard and ProductDetailsPopup components remain the same) ...

const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <img src={product.imageUrl} alt={product.name} className="product-image" />
    <div className="product-details">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
    </div>
  </div>
);

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
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("fruits");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtersByCategory = {
    // ... (filtersByCategory object remains the same) ...
    fruits: ["All", "Fresh Fruits", "Exotic Fruits", "Dry Fruits", "Fresh Vegetables", "Exotic Vegetables"],
    grains: ["All", "Whole Grains", "Lentils", "Beans", "Flours"],
    spices: ["All", "Tea & Coffee", "Sweeteners", "Whole Spices", "Powder Spices", "Exotic Spices"],
    oils: ["All", "Everyday Oils", "Premium Oils", "Ghee"],
    beverages: ["All", "Chips & Crsips", "Chocolates & Cookies", "Papad & Fryums", "Spreads & Sauces", "Soft Drinks"],
    oral: ["All", "Toothpaste", "Mouthwash"],
    soaps: ["All", "Herbal Soaps", "Baby Soaps", "Shower Gels"],
    handwash: ["All"],
    lotions: ["All", "Moisturizers", "Sunscreens"],
    haircare: ["All", "Shampoos", "Conditioners", "Hair Oils"],
    laundry: ["All", "Detegrent Soaps", "Detergent Powders", "Detergent Liquids", "Fabric Softeners"],
    dishwash: ["All", "Dishwash Bars", "Dishwash Powders", "Dishwash Gels"],
    bathroom: ["All", "Toilet Cleaners", "Bathroom Cleaners"],
    floorcleaners: ["All", "Floor Cleaners", "Surface Cleaners", "Room Freshners"],
    repelents: ["All", "Machines & Refills", "Sprays", "Gels", "Disinfectants"]
  };

  useEffect(() => {
    // Check if location.state exists and has a category property
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);
  
  // MODIFIED useEffect for Global Search
  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    // 1. Determine the initial product list based on whether a search term is present.
    let productsToFilter = productsData; // Start with ALL products

    if (searchTerm) {
      // If there is a search term, execute the GLOBAL SEARCH on ALL products
      productsToFilter = productsData.filter(
        (product) => 
          product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          product.description.toLowerCase().includes(lowerCaseSearchTerm)
      );
      
      // Since we are doing a GLOBAL search, we can stop here.
      setFilteredProducts(productsToFilter);
      return; // Exit the useEffect early when global search is active
    }

    // 2. If NO search term is present, revert to the original Category/Subcategory filtering
    
    // Filter by selected category
    let productsInSelectedCategory = productsData.filter(
      (product) => product.category === selectedCategory
    );

    // Filter by selected sub-category
    if (selectedFilter !== "All") {
      productsInSelectedCategory = productsInSelectedCategory.filter(
        (product) => product.subCategory === selectedFilter
      );
    }
    
    setFilteredProducts(productsInSelectedCategory);

  }, [selectedCategory, selectedFilter, searchTerm]); // Dependency array remains the same

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };
  
  // Helper text for content title
  const getContentSubtitle = () => {
    if (searchTerm) {
      return `Showing global search results for "${searchTerm}"`;
    }
    return `Showing products for ${selectedCategory}${selectedFilter !== "All" ? ` > ${selectedFilter}` : ''}`;
  }


  return (
    <div>
      {/* Hero Section */}
      <ProductsPageHero />

      {/* Main Section with Sidebar + Content */}
      <div className="products-container">
        {/* Sidebar */}
        <aside className="products-sidebar">
          {/* Dropdown - DISABLED/RESET when search is active */}
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
              // Visually disable the dropdown when search is active
              disabled={!!searchTerm} 
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
            {searchTerm && <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.5rem' }}>Clear search to enable category selection.</p>}
          </div>

          {/* Dynamic Filters - DISABLED when search is active */}
          <h2 className="sidebar-title">Filters</h2>
          <div className="filter-options" style={{ opacity: searchTerm ? 0.5 : 1 }}>
            {filtersByCategory[selectedCategory].map((filter, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="subcategory"
                  value={filter}
                  checked={selectedFilter === filter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  // Disable the radio buttons when search is active
                  disabled={!!searchTerm} 
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
            {/* Displaying dynamic subtitle based on search status */}
            {getContentSubtitle()}
          </p>
          
          {/* Search Bar Container */}
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search all products globally..."
              className="product-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => handleCardClick(product)} />
              ))
            ) : (
              <p>No products found {searchTerm ? `matching "${searchTerm}"` : 'in this category/filter'}.</p>
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