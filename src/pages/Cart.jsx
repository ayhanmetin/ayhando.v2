import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  const styles = {
    cartContainer: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#fff',
      minHeight: '15rem',
      marginBottom: '50px',
    },
    cartItems: {
      borderBottom: '2px solid #eee',
      marginBottom: '25px',
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 250px)',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '25px',
      padding: '15px',
      border: '1px solid #eee',
      borderRadius: '8px',
    },
    cartItemImage: {
      width: '120px',
      height: '120px',
      objectFit: 'cover',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginRight: '20px',
    },
    cartItemTitle: {
      fontSize: '1.3em',
      color: '#333',
      textDecoration: 'none',
    },
    cartItemPrice: {
      fontSize: '1.2em',
      color: '#666',
    },
    cartSummary: {
      textAlign: 'right',
      marginTop: '25px',
    },
    button: {
      borderRadius: '8px',
      padding: '12px 25px',
    },
    checkoutButton: {
      backgroundColor: '#28a745',
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '12px',
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: '20px',
    },
    quantityInput: {
      margin: '10px',
      width: '60px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1px',
    },
  };

  const handleCheckout = () => {
    clearCart(); // Clear the cart first
    setShowSuccessMessage(true); // Then show the success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the success message after a delay
    }, 3000); // Adjust time as needed
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.cartContainer} className='cart-container mt-5 mb-5'>
      <h2 className='text-center'>Your Shopping Cart</h2>
      {showSuccessMessage && (
        <div style={styles.successMessage} className='alert alert-success text-center' role='alert'>
          Your order has been submitted successfully!
        </div>
      )}
      {cartItems.length === 0 && !showSuccessMessage && (
        <p className='text-center'>Your cart is empty</p>
      )}
      <div style={styles.cartItems} className='cart-items'>
        {cartItems.map(item => (
          <div
            style={styles.cartItem}
            className='cart-item d-flex align-items-center justify-content-between'
            key={item.id}
          >
            <img
              style={styles.cartItemImage}
              src={item.image}
              alt={item.title}
              className='cart-item-image'
            />
            <div className='cart-item-info'>
              <Link to={`/product/${item.id}`} style={styles.cartItemTitle} className='cart-item-title'>
                {item.title}
              </Link>
              <div style={styles.cartItemPrice}>
                $ {item.price.toFixed(2)} x {item.quantity}
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ ...styles.button, ...styles.deleteButton }}
              className='btn btn-danger'
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div style={styles.cartSummary} className='cart-summary mt-4'>
          <h4>Total Price: $ {totalPrice.toFixed(2)}</h4>
          <button
            type='button'
            style={{ ...styles.button, ...styles.checkoutButton }}
            className='btn btn-success'
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
