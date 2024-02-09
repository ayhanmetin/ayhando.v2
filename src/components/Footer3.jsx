import React from 'react';

export default function Footer3() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='bg-white'>
        <div className='container d-flex justify-content-end mt-3 pb-4'>
          <button
            onClick={scrollToTop}
            style={{
              color: 'white',
              backgroundColor: 'black',
              border: 'none',
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            aria-label="Go to top"
          >
            Go to top ▲
          </button>
          
        </div>
      </div>
    </>
  );
}
