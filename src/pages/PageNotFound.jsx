import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8 text-center'>
          <h2 className='mb-4'>
            Oops! We can't seem to find the page you're looking for!
          </h2>
          <button
            className='btn btn-warning btn-lg'
            onClick={() => navigate('/')}
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
