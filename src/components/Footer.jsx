// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Customer Care Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">Report Fraud</a></li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul>
            <li><a href="#" className="hover:underline">Company Info</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
            <li><a href="#" className="hover:underline">Press Releases</a></li>
          </ul>
        </div>

        {/* Policies Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Akaz Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
