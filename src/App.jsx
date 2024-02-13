import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, json } from 'react-router-dom';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductLayout from './pages/ProductLayout';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import PrivateRoute from './PrivateRoute';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) ?? null);
  }, []);

  const handleLogin = () => {
    const user = { id: 1, name: 'User1' };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Nav />
      <NavBar user={user} handleLogout={handleLogout} />
      <div className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='category/:categoryName' element={<ProductLayout />} />
          <Route
            path='/login'
            element={
              <Login handleLogout={handleLogout} handleLogin={handleLogin} />
            }
          />
          <Route
            path='/cart'
            element={
              <PrivateRoute user={user}>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
