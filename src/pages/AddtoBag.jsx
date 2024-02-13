import React from 'react';

const buttonStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  zIndex: 1,
};

export default function AddToBagButton() {
  return (
    <a href='#' className='btn border' style={buttonStyle}>
      Add to bag
    </a>
  );
}
