// src/components/ProductCard.jsx
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <div className="flex mt-2 space-x-2">
        <button
          className="flex-1 flex items-center justify-center bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500"
        >
          Buy Now
        </button>
        <button
          className="flex-1 flex items-center justify-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          onClick={() => addToCart(product)}
        >
          <FaCartPlus className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
