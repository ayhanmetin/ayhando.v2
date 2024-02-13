import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav3({ user, handleLogout }) {
  return (
    <div className='container d-flex mt-1 flex-wrap align-items-center justify-content-between justify-content-lg-start border-bottom pb-3 ps-3 mb-0'>
      <NavLink
        to='/'
        className='d-flex align-items-center mb-2 mb-lg-0 text-secondary text-decoration-none'
      ></NavLink>
      <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-between mb-md-0'>
        <li>
          <NavLink to='/' className='nav-link px-2 text-secondary'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='nav-link px-2 text-secondary'>
            Shop All
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='nav-link px-2 text-secondary'>
            Discover{' '}
            <span
              className='rounded px-2'
              style={{ color: 'white', backgroundColor: 'black' }}
            >
              Plus
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className='nav-link px-2 text-secondary text-danger'>
            Sale %
          </NavLink>
        </li>
      </ul>

      <div className='d-flex align-items-center'>
        {user ? (
          <>
            <button
              onClick={handleLogout}
              type='button'
              className='btn border border-light-subtle p-1 px-2 me-3'
            >
              Logout ({user.name})
            </button>
            <NavLink
              className='nav-link border px-3 border-light-subtle p-1 rounded'
              to='/cart'
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
            </NavLink>
          </>
        ) : (
          <NavLink
            to='/login'
            type='button'
            className='btn border border-light-subtle p-1 px-2 me-3'
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}
