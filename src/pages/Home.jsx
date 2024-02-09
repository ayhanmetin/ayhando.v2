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
  };

  const imgStyle = {
    height: '150px',
    objectFit: 'contain',
    width: '100%',
  };

  const favIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: 'red',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-3 d-flex justify-content-center mt-4">
            <div className="card" style={cardStyle}>
              <span style={favIconStyle}>&#9733;</span>
              <img
                src={product.image}
                className="card-img-top pt-4"
                alt={product.title}
                style={imgStyle}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.substring(0, 25)}</h5>
                <p className="card-text">
                  {product.description.substring(0, 50)}...
                </p>
                <p>${product.price}</p>
                <a href="#" className="btn border">
                  Add to bag
                </a>
              </div>
              <button style={buttonStyle} className="btn btn-dark btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
