import React, { useReducer, useState } from 'react';
import AuthContext from '../../utils/context';

const LOGIN = 'Login';

const LOGOUT = 'Logout';

const saveUsertoLocal = user => {
  return {
    type: LOGIN,
    payload: user
  };
};

const initialState = {
  isAuthenticated: false,
  user: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      let user = action.payload;
      let expiresIn = 1000 * new Date().getTime();
      console.log(user);

      localStorage.setItem('expiresIn', JSON.stringify(expiresIn));
      localStorage.setItem('user', user);

      return { isAuthenticated: true, user: user };
    case LOGOUT:
      localStorage.removeItem('expiresIn');
      localStorage.removeItem('user');
      return { ...state, isAuthenticated: false, user: null };
    default:
      break;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const saveUserFunc = user => {
    dispatch(saveUsertoLocal(user));
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          state,
          saveUser: user => saveUserFunc(user)
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
