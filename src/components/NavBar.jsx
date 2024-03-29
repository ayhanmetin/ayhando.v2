import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import Nav4 from './Nav4';

export default function NavBar({ user, handleLogout }) {
  return (
    <>
      <Nav2 />
      <Nav3 user={user} handleLogout={handleLogout} />
      <Nav4 />
    </>
  );
}
