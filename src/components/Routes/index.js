import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import Profile from '../Profile';
import AuthContext from '../../utils/context';
import PasswordReset from '../Authentication/forms/password_reset';

const Routes = () => {
  const context = useContext(AuthContext);
  console.log(context);

  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    let isAuthenticated = context.state.isAuthenticated;

    if (!isAuthenticated && isTokenValid()) {
      context.LogOut();
      navigate('/login');
      return null;
    }
    return <Component {...rest} />;
  };

  return (
    <Router>
      <PrivateRoute path='/app/profile' component={Profile} />
      <PasswordReset path='/app/passwordreset/:token' />
    </Router>
  );
};

export default Routes;
