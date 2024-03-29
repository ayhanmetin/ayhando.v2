import React from 'react';
import Categories from './Categories';
import CategoryCard from './CategoryCard';

export default function ProductLayout({ user }) {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-4 col-sm-4'>
          <Categories />
        </div>
        <div className='col-md-8 col-sm-8'>
          <CategoryCard user={user} />
        </div>
      </div>
    </div>
  );
}
