import React, { useState } from 'react';

export default function Login({ handleLogin, handleLogout }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!username || !password) {
      setMessage('Username and password cannot be empty!');
      return; // Prevent further execution if validation fails
    }
    // Invoke the handleLogin passed as a prop
    handleLogin(); // This should manage user state, localStorage, and possibly navigation
    setIsLoggedIn(true); // Update the isLoggedIn state
    setMessage('Login Successful!'); // Set a success message
  };

  const handleLogoutClick = () => {
    handleLogout(); // Use the handleLogout function passed as a prop
    setIsLoggedIn(false); // Update the isLoggedIn state
    setUsername(''); // Clear username state
    setPassword(''); // Clear password state
    setMessage(''); // Clear message state
  };

  return (
    <div className='container py-5 pt-0 mt-5'>
      <div className='row'>
        <div className='col-12 col-md-6 mx-auto'>
          <div className='card shadow-sm p-3 mb-5 bg-body rounded'>
            <div className='card-body'>
              <h1 className='h3 mb-3 fw-normal text-center'>Login</h1>
              {message && (
                <div className='alert alert-warning' role='alert'>
                  {message}
                </div>
              )}
              {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='floatingUsername'
                      placeholder='Username'
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                    <label htmlFor='floatingUsername'>Username</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='password'
                      className='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                  </div>
                  <button
                    className='btn btn-lg btn-primary w-100'
                    type='submit'
                  >
                    Sign in
                  </button>
                </form>
              ) : (
                <div>
                  <button
                    className='btn btn-lg btn-secondary w-100'
                    onClick={handleLogoutClick}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
