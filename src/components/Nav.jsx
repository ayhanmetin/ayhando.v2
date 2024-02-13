import React from 'react';

const containerStyle = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: '13px',
};

const pStyle = {
  marginBottom: '4px',
};

export default function Nav() {
  return (
    <>
      <div
        className='bg-body-secondary d-flex justify-content-evenly pt-1 fw-bold text-body-secondary'
        style={containerStyle}
      >
        <p style={pStyle}>Help and contact</p>
        <p style={pStyle}>
          Free standard delivery over 29,90 € & free returns!
        </p>
        <p style={pStyle}>100-day return policy</p>
      </div>
    </>
  );
}
