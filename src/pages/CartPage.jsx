// src/pages/CartPage.jsx
import React from 'react';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b py-8 flex items-start space-x-8">
              {/* Product Image */}
              <img src={item.image} alt={item.title} className="w-32 h-32 object-contain" />

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2">Description: {item.description}</p>
                <p className="text-gray-600 mt-1">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 mt-4 underline"
                >
                  Remove
                </button>
              </div>
              <p className="font-semibold text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
            <button className="bg-green-500 text-white px-8 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
