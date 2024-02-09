import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav2() {
  return (
    <>
      <div className='container'>
        <nav className='nav nav-underline justify-content-between mt-3 ps-5 pb-2'>
          <NavLink className='nav-item nav-link link-body-emphasis' to='/men'>
            Men's Clothing
          </NavLink>
          <NavLink className='nav-item nav-link link-body-emphasis' to='/women'>
            Women's Clothing
          </NavLink>
          <NavLink
            className='nav-item nav-link link-body-emphasis'
            to='/electronics'
          >
            Electronics
          </NavLink>
          <NavLink
            className='nav-item nav-link link-body-emphasis'
            to='/jewelery'
          >
            Jewelery
          </NavLink>
          <NavLink
            className='nav-item nav-link link-body-emphasis'
            to='/Technology'
          >
            Technology
          </NavLink>
        </nav>
      </div>
    </>
  );
}
