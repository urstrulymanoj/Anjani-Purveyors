import React from "react";
import "./Products.css";
import product_1 from "../../assets/FruitCategory.png";
import product_2 from "../../assets/GrainsCategory.png";
import product_3 from "../../assets/spices2.png";
import product_4 from "../../assets/spices2.png";
import product_icon_1 from "../../assets/program-icon-1.png";
import product_icon_2 from "../../assets/program-icon-2.png";
import product_icon_3 from "../../assets/program-icon-3.png";
import product_icon_4 from "../../assets/program-icon-3.png";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    { img: product_1, icon: product_icon_1, label: "Fruits" },
    { img: product_2, icon: product_icon_2, label: "Vegetables" },
    { img: product_3, icon: product_icon_3, label: "Spices" },
    { img: product_4, icon: product_icon_4, label: "More" },
  ];

  return (
    <div className="products">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="product-slider"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product">
              <img src={item.img} alt={item.label} />
              <div className="caption">
                <img src={item.icon} alt="" />
                <p>{item.label}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows placed outside the slider */}
      <div className="slider-nav">
        <button className="custom-prev">&#10094;</button>
        <button className="custom-next">&#10095;</button>
      </div>
    </div>
  );
};

export default Products;
