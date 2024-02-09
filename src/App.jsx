import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer3';

function App() {
  return (
    <>
      <Nav />
      <div className='d-flex flex-column vh-100'>
        <NavBar />
        <div className='container-xl mt-5 pb-5 flex-grow-1'></div>
      </div>
      <Footer />
      <Footer2 />
      <Footer3 />
    </>
  );
}

export default App;
