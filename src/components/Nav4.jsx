import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  fontFamily: "'Open Sans', sans-serif",
};

export default function Nav4() {
  return (
    <>
      <div className='bg-warning border-top mb-0 pb-0 border-4 border-dark'>
        <div className='container pt-0 p-1 mt-0 p-md-4 mb-0 rounded text-body-emphasis'>
          <div className='col-lg-6 px-0'>
            <p
              style={containerStyle}
              className='lead fs-2 fw-bold mb-5 text-white text'
            >
              Valentine's Day is coming 💕 20% off Clothing & Accessories
            </p>
            <p className='lead mb-4 pb-4'>
              <Link
                to="/category/women's clothing"
                className='pb-1 text-dark text fw-bold fs-4 text-decoration-none'
              >
                Our selection:
              </Link>
            </p>
          </div>
          <nav className='nav nav-underline justify-content-between fw-bold mt-2 text-white text'>
            <Link
              className='nav-item nav-link text border border-dark text-body px-4 rounded border-2 bg-white'
              to="/category/men's clothing"
            >
              Men's Clothing
            </Link>
            <Link
              className='nav-item nav-link text-white border border-dark text-body px-4 rounded border-2 bg-white'
              to="/category/women's clothing"
            >
              Woman's Clothing
            </Link>
            <Link
              className='nav-item nav-link text-white border border-dark text-body px-4 rounded border-2 bg-white'
              to="/category/jewelery"
            >
              Jewelery
            </Link>
            <Link
              className='nav-item nav-link text-white border border-dark text-body px-4 rounded border-2 bg-white'
              to="/category/electronics"
            >
              Electronics
            </Link>
          </nav>
        </div>
      </div>
      <div className='bg-black'>
        <div className='container'>
          {' '}
          <Link
            className='nav-item mb-2 ms-5 mt-2 nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
            to='/category/electronics'
          >
            Shop now{' '}
            <span>
              <svg
                viewBox='0 0 24 24'
                width='1em'
                height='1em'
                fill='currentColor'
                focusable='false'
                aria-hidden='true'
              >
                <path d='M.443 12c0 .414.336.75.75.75h20.869l-7.72 7.72a.75.75 0 0 0 1.06 1.06l7.94-7.94a2.252 2.252 0 0 0 0-3.18l-7.94-7.94a.75.75 0 0 0-1.06 1.06l7.72 7.72H1.192a.75.75 0 0 0-.75.75z'></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
