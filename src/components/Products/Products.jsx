import React from 'react'
import './Products.css'
import product_1 from '../../assets/fruits1.jpg'
import product_2 from '../../assets/veges1.jpg'
import product_3 from '../../assets/spices1.png'
import product_icon_1 from '../../assets/program-icon-1.png'
import product_icon_2 from '../../assets/program-icon-2.png'
import product_icon_3 from '../../assets/program-icon-3.png'
const Products = () => {
  return (
    <div className='products'>
      <div className='product'>
        <img src={product_1} alt="" />
        <div className="caption">
            <img src={product_icon_1} alt="" />
            <p>Furits</p>
        </div>
      </div>
      <div className='product'>
        <img src={product_2} alt="" />
        <div className="caption">
            <img src={product_icon_2} alt="" />
            <p>Vegetables</p>
        </div>
      </div>
      <div className='product'>
        <img src={product_3} alt="" />
        <div className="caption">
            <img src={product_icon_3} alt="" />
            <p>Spices</p>
        </div>
      </div>
    </div>
  )
}

export default Products
