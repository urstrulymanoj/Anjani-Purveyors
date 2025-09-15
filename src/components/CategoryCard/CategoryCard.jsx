import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, description, color, imageUrl }) => {
  // Determine text color based on background luminance for better contrast
  const isDarkBackground = (color) => {
    if (!color) return false;
    const hex = color.startsWith('#') ? color.slice(1) : color;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Calculate luminance using standard formula
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5; // If luminance is less than 0.5, it's considered a dark color
  };

  const headerTextColor = isDarkBackground(color) ? '#fff' : '#333';

  return (
    <div className="category-card" style={{ backgroundColor: color }}>
      <div className="card-header">
        {imageUrl && <img src={imageUrl} alt={title} className="category-image" />}
        
      </div>
      <div className="card-content">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;