import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Categories({ user }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then(res => res.json())
      .then(json => setCategories(json));
  }, []);

  const styles = {
    heading: {
      fontFamily: '"Segoe UI", Arial, sans-serif', // Professional, clean font
      fontWeight: 300, 
      letterSpacing: '0.02em', 
      color: '#333', 
    },
    link: {
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease', // Smooth transition for hover effects
    },
  };

  return (
    <div className='container my-5'>
      <h1 style={styles.heading} className='mb-4'>
        Categories
      </h1>
      <div className='list-group'>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category}`}
            className='list-group-item list-group-item-action d-flex justify-content-between align-items-center shadow-sm mb-2'
            style={styles.link}
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
