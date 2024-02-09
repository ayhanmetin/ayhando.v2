import React from 'react';

export default function Nav2() {
  return (
    <>
      <div className='container'>
        <nav class='nav nav-underline justify-content-between mt-3 ps-5 pb-2'>
          <a class='nav-item nav-link link-body-emphasis' href='#'>
            Men's Clothing
          </a>
          <a class='nav-item nav-link link-body-emphasis' href='#'>
            Women's Clothing
          </a>
          <a class='nav-item nav-link link-body-emphasis active' href='#'>
            Electronics
          </a>
          <a class='nav-item nav-link link-body-emphasis' href='#'>
            Jewelery
          </a>
          <a class='nav-item nav-link link-body-emphasis' href='#'>
            Technology
          </a>
        </nav>
      </div>
    </>
  );
}
