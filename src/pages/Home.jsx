import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext'; // Adjust the import path as necessary

export default function Home({ user }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // Use the useCart hook to access addToCart

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const cardStyle = {
    width: '18rem',
    position: 'relative',
    marginBottom: '20px',
  };

  const imgStyle = {
    height: '150px',
    objectFit: 'contain',
    width: '100%',
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className='col-3 d-flex justify-content-center mt-5'
          >
            <div className='card' style={cardStyle}>
              <img
                src={product.image}
                className='card-img-top pt-4'
                alt={product.title}
                style={imgStyle}
              />
              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{product.title.substring(0, 25)}</h5>
                <p className='card-text'>
                  {product.description.substring(0, 50)}...
                </p>
                <p>${product.price}</p>
                {user && (
                  <button
                    className='btn border mt-auto'
                    onClick={() => addToCart(product)}
                    style={{ position: 'relative', zIndex: 0 }}
                  >
                    Add to bag
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
