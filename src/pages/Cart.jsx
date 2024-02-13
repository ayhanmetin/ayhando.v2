import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className='container my-5'>
      <h2 className='text-center'>Your Shopping Cart</h2>
      {showSuccessMessage && (
        <div className='alert alert-success' role='alert'>
          Your order has been submitted successfully!
        </div>
      )}
      {cartItems.length === 0 && !showSuccessMessage && (
        <p className='text-center'>Your cart is empty</p>
      )}
      <div className='list-group'>
        {cartItems.map((item, index) => (
          <div className='list-group-item' key={item.id}>
            <div className='row align-items-center'>
              <div className='col-md-2'>
                <img
                  className='img-fluid rounded'
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className='col-md-8'>
                <Link to={`/product/${item.id}`} className='text-dark h5 mb-0'>
                  {item.title}
                </Link>
                <p className='mb-0'>
                  $ {item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className='col-md-2'>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='btn btn-danger'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className='text-right mt-3'>
          <h4>Total Price: $ {totalPrice.toFixed(2)}</h4>
          <button className='btn btn-success' onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
