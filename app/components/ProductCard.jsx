'use client'
import React, { useState } from "react";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    // TODO: card animations and color
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
    const {bgColor, image, mainTitle, description} = product
    return (
        <div className={`rounded-xl ${
            isHovered ? 'bg-white card-hover' : ''} flex gap-3 items-center p-8 hover:bg-white`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundColor: bgColor,
              }}
        
      >
            <img className="w-48 h-auto " src={image} alt="" />
            <div className="">
                <h2 className="text-xl font-bold">{mainTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;