import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import { CartProvider } from './context/CartContext'; // Update this path if necessary

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to home if user is logged in and tries to access the login page
    if (user && location.pathname === '/login') {
      navigate('/');
    }
  }, [navigate, location.pathname, user]);

  const handleLogin = userCredentials => {
    const user = { id: 1, name: 'Germany2024', ...userCredentials }; // Simulate user login
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/'); // Navigate to the home page after login
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // Navigate to login page after logout
  };

  return (
    <CartProvider>
      <div className='d-flex flex-column min-vh-100'>
        <Nav />
        <NavBar user={user} handleLogout={handleLogout} />
        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Home user={user} />} />
            <Route path='/categories' element={<Categories user={user} />} />
            <Route
              path='category/:categoryName'
              element={<ProductLayout user={user} />}
            />
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
    </CartProvider>
  );
}

export default App;
