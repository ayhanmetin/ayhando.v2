import React, { createContext, useContext, useState } from 'react';

// Creating the cart context with default values
const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {}, // Added clearCart function definition here for completeness
});

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Provider component that wraps your app and makes cart context available to any child component that calls useCart().
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      // Check if the product is already in the cart
      const isProductInCart = currentItems.find(item => item.id === product.id);
      if (isProductInCart) {
        // If the product is already in the cart, increase its quantity
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; // Export CartProvider for use in your app
