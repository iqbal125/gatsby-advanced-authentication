import React, { useReducer, useState } from 'react';
import AuthContext from '../../utils/context';
import { authReducer, initialState } from '../../store/reducers/auth_reducer';
import { saveUserAction } from '../../store/actions/actions';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const saveUserFunc = user => {
    dispatch(saveUserAction(user));
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
