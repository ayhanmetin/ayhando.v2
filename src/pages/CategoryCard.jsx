import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryCard() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(res => res.json())
      .then(json => setCategoryProducts(json));
  }, [categoryName]);

  // Styles defined inside the component for clarity
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
        {categoryProducts.map((product, index) => (
          <div
            key={product.id}
            className='col-md-4 d-flex justify-content-center mt-4'
          >
            <div className='card' style={cardStyle}>
              <span className='rounded' style={favIconStyle}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-heart-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314'
                  ></path>
                </svg>
              </span>{' '}
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
