# Akaz Store E-Commerce App

A simple, responsive e-commerce app built with ReactJS and Tailwind CSS, using the Fake Store API to fetch product data. The app allows users to browse products, add items to a cart, adjust quantities, and view cart details through a modal interface. 

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Future Improvements](#future-improvements)

## Features
- **Product Display**: Fetches product data from the Fake Store API and displays each item’s image, title, and price.
- **Add to Cart**: Users can add products to their cart and are alerted if the product is already in the cart.
- **Cart Management**: Displays the cart as a modal with the ability to adjust product quantities, view a product description, and see the total price.
- **Responsive Layout**: Tailored for desktop and mobile users, with a Flipkart-inspired theme.
- **Footer**: Informational footer with sections for customer care, policies, and social media links.

## Demo
This app can be run locally using the instructions below. 

## Installation

### Prerequisites
- Ensure you have Node.js and npm installed on your machine.
- This project is built using [Vite](https://vitejs.dev/), a fast development tool for React applications.

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_name>

2. **Install dependencies:
    npm install

3. **Run the application:
   npm run dev


##Usage

*Browse Products: The home page displays a list of products from the Fake Store API.
*Add to Cart: Click the "Add to Cart" button for any product.
*View Cart: Click the "CART" option in the navbar to manage cart items.
*Checkout: The cart page contains a "Checkout" button to simulate a purchase process (basic functionality).
    
##Project Structure

src
│
├── components
│   ├── Navbar.jsx          # Navbar with search bar and cart link
│   ├── Footer.jsx          # Footer with informational links
│   ├── ProductList.jsx     # Main product display component
│   ├── ProductCard.jsx     # Individual product card component
│   ├── CartModal.jsx       # Modal showing cart items
│
├── pages
│   ├── CartPage.jsx        # Cart page to view/manage items
│
├── App.jsx                 # Main app component with routing
├── index.css               # Tailwind CSS configuration
└── main.jsx                # React entry point


##Tech Stack

*ReactJS: Builds the dynamic user interface.
*Tailwind CSS: Adds utility-first styling to components.
*Vite: Provides a fast development server and bundler.
*Fake Store API: Supplies sample product data.


##Future Improvements

*User Authentication: Add user accounts for personalized cart functionality.
*Product Filtering: Add filter options by category, price range, etc.
*Persist Cart Data: Store cart data in local storage or backend API.
*Checkout Process: Add full checkout and payment capabilities.


This `README.md` file can be saved directly in the root of your project and will be automatically recognized by GitHub or any other platform that displays markdown files. It includes structured sections to explain the project clearly. Let me know if you'd like to expand on any specific section!
