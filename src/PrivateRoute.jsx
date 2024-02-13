import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
  // Check if the user object exists and has an id property
  // Redirect to the login page if not authenticated
  if (!user || !user.id) {
    return <Navigate to="/login" replace />;
  }

  // Render the child components if the user is authenticated
  return children;
};

export default PrivateRoute;
