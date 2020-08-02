import React, { useContext } from 'react';
import AuthContext from '../../utils/auth_context';

const Profile = () => {
  const { state } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome: {state.user.username} </h1>
      <h2> This is a private Authenticated Page</h2>
    </div>
  );
};

export default Profile;
