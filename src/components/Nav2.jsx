import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomNavLink.css'; // Import custom CSS for hover effect

export default function Nav2() {
  return (
    <div className='container'>
      <nav className='nav justify-content-between mt-3 ps-5 pb-2'>
        <NavLink
          target='_blank'
          className='nav-item nav-link custom-nav-link'
          to='https://www.ayhanmetin.eu/practice'
        >
          Testing Practice{' '}
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
        </NavLink>
        <NavLink className='nav-item nav-link custom-nav-link' to='/'>
          Cypress
        </NavLink>
        <NavLink className='nav-item nav-link custom-nav-link' to='/'>
          Selenium
        </NavLink>
        <NavLink className='nav-item nav-link custom-nav-link' to='/'>
          Playwright
        </NavLink>
      </nav>
    </div>
  );
}
