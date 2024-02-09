import React from 'react';

export default function Nav3() {
  return (
    <div className='container d-flex mt-3 flex-wrap align-items-center justify-content-between justify-content-lg-start border-bottom pb-4'>
      <a
        href='/'
        className='d-flex align-items-center mb-2 mb-lg-0 text-secondary text-decoration-none'
      ></a>

      <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-between mb-md-0'>
        <li>
          <a href='#' className='nav-link px-2 text-secondary'>
            Home
          </a>
        </li>
        <li>
          <a href='#' className='nav-link px-2 text-secondary'>
            New In
          </a>
        </li>
        <li>
          <a href='#' className='nav-link px-2 text-secondary'>
            Shop All
          </a>
        </li>
        <li>
          <a href='#' className='nav-link px-2 text-secondary'>
            Discover{' '}
            <span
              className='rounded px-2'
              style={{ color: 'white', backgroundColor: 'black' }}
            >
              Plus
            </span>
          </a>
        </li>
        <li>
          <a href='#' className='nav-link px-2 text-secondary text-danger'>
            Sale %
          </a>
        </li>
      </ul>

      <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
        <input
          type='search'
          className='form-control text-secondary border-light-subtle p-1 px-2 me-3'
          placeholder='Search...'
          aria-label='Search'
        />
      </form>

      <div className='d-flex align-items-center'>
        <button
          type='button'
          className='btn border border-light-subtle p-1 px-2 me-3'
        >
          Login
        </button>
        <button
          type='button'
          className='btn border border-light-subtle p-1 px-3 me-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-heart-fill'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314'
            />
          </svg>
        </button>
        <a
          className='nav-link border px-3 border-light-subtle p-1 rounded'
          href='#'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-cart-fill'
            viewBox='0 0 16 16'
          >
            <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
          </svg>
        </a>
      </div>
    </div>
  );
}
