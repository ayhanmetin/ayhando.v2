import React, { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  const cardStyle = {
    width: '18rem',
    position: 'relative',
    marginBottom: '20px', // Ensures space at the bottom of the card
  };

  const imgStyle = {
    height: '150px',
    objectFit: 'contain',
    width: '100%',
  };

  const favIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'black',
    padding: '6px',
  };

  const buttonStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: 1,
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
                <a
                  href='#'
                  className='btn border mt-auto'
                  style={{ position: 'relative', zIndex: 0 }}
                >
                  Add to bag
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
