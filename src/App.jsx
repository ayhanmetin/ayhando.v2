import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductLayout from './pages/ProductLayout';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Nav />
      <NavBar />
      <div className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='category/:categoryName' element={<ProductLayout />} />

          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
