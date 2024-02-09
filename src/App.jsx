import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div className='container d-flex flex-column vh-100'>
        <NavBar />
       
        <div className='container-xl mt-5 pb-5 flex-grow-1'></div>
      </div>
    </>
  );
}

export default App;
