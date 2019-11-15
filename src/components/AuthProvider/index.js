import React, { useReducer, useEffect } from 'react';
import AuthContext from '../../utils/context';
import { authReducer, initialState } from '../../store/reducers/auth_reducer';
import { saveUserAction, Logout } from '../../store/actions/actions';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const silentAuth = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));

    if (user && new Date().getTime() < expiresAt) {
      dispatch(saveUserAction(user));
    } else if (!user && new Date().getTime() < expiresAt) {
      dispatch(LogOut);
    }
  };

  useEffect(() => {
    silentAuth();
  }, []);

  //logs in user and saves to global store
  const saveUser = user => {
    dispatch(saveUserAction(user));
  };

  const LogOut = () => {
    dispatch(Logout);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          state,
          saveUser,
          LogOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
