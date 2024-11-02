// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="p-6 bg-blue-500 text-white flex justify-between items-center text-lg">
      <Link to="/" className="text-3xl font-bold">Akaz Store</Link>

      {/* Centered Search Bar */}
      <div className="flex items-center bg-white text-gray-800 rounded-full overflow-hidden w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow p-2 outline-none text-base"
        />
        <button className="p-3 bg-gray-200 hover:bg-gray-300">
          <FaSearch />
        </button>
      </div>

      {/* Cart Icon and Text */}
      <Link to="/cart" className="flex items-center">
        <FaShoppingCart size={28} className="text-white" />
        {cartCount > 0 && (
          <span className="ml-1 bg-red-500 text-white rounded-full px-2 text-xs">
            {cartCount}
          </span>
        )}
        <span className="ml-3 font-semibold text-xl">CART</span>
      </Link>
    </nav>
  );
};

export default Navbar;
