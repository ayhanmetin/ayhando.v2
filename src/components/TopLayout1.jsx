import React from 'react';

const containerStyle = {
  fontFamily: "'Open Sans', sans-serif",
};

export default function TopLayout1() {
  return (
    <>
      <div className='p-1 mt-2 p-md-5 mb-4 rounded text-body-emphasis bg-info'>
        <div className='col-lg-6 px-0'>
          <p style={containerStyle} className='lead my-3 fw-bold'>
            Valentine's Day is coming 💕 20% off Clothing & Accessories
          </p>
          <a className='nav-item mb-3 nav-link link-body-emphasis' href='#'>
            Explore more{' '}
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
          </a>
          <p className='lead mb-0'>
            <a
              href='#'
              className='text-primary-emphasis text-black mb-0 pb-0 fw-bold'
            >
              Our selection:
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
