import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css'; // Make sure this path correctly points to your CSS file

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckout = () => {
    clearCart(); // Clear the cart first
    setShowSuccessMessage(true); // Then show the success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the success message after a delay
    }, 3000); // Adjust time as needed
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container mt-5 mb-5">
      <h2 className="text-center">Your Shopping Cart</h2>
      {showSuccessMessage && (
        <div className="alert alert-success text-center" role="alert">
          Your order has been submitted successfully!
        </div>
      )}
      {cartItems.length === 0 && !showSuccessMessage && (
        <p className="text-center">Your cart is empty</p>
      )}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item d-flex align-items-center justify-content-between" key={item.id}>
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-info">
              <Link to={`/product/${item.id}`} className="cart-item-title">
                {item.title}
              </Link>
              <div>$ {item.price.toFixed(2)} x {item.quantity}</div>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
              Remove
            </button>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-summary mt-4">
          <h4>Total Price: $ {totalPrice.toFixed(2)}</h4>
          <button type="button" className="btn btn-success" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
