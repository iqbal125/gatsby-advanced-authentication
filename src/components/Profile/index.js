import React, { useContext } from 'react';
import AuthContext from '../../utils/auth_context';
import styles from './profile.module.css';
import { navigate } from 'gatsby';
import image1 from '../../../static/undraw_balloons_vxx5.svg';

const Profile = () => {
  const context = useContext(AuthContext);

  const logOut = () => {
    context.firebase.auth().signOut();
    context.LogOut();
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome {context.state.user ? context.state.user.username : ''} </h1>
      <h2> This is a private Authenticated Page</h2>
      <button onClick={logOut} className={styles.logout_button}>
        Logout
      </button>
      <img className={styles.image} src={image1} alt="" />
    </div>
  );
};

export default Profile;
