import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import styles from './styles/loginform.module.css';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AuthContext from '../../../utils/auth_context';
import { navigate } from 'gatsby';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);
  const context = useContext(AuthContext);

  const handleSubmit = values => {
    setLoading(true);

    let email = values.emaillogin;
    let password = values.passwordlogin;

    let data = {
      email,
      password
    };

    let handleAuthRes = res => {
      console.log(res);
      if (res.data.token) {
        context.saveUser(jwt_decode(res.data.token));
        navigate('/app/profile');
      }
      if (res.data.message) {
        setLoading(false);
        setresMessage(res.data.message);
      }
    };

    let handleAuthErr = err => {
      console.log(err);
      setLoading(false);
      setresMessage('Login Failed Please Try Again');
    };

    axios
      .post(`${process.env.GATSBY_SERVER_URL}/login`, data)
      .then(res => handleAuthRes(res))
      .catch(err => handleAuthErr(err));
  };

  return (
    <div className={styles.form_wrap}>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      {!resMessage ? <h3>Login</h3> : <h3>{resMessage}</h3>}
      <Formik initialValues={{ emaillogin: '', passwordlogin: '' }} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="emaillogin">Username or Email:</label>
            <input
              className={styles.form_input}
              type="email"
              name="emaillogin"
              id="emaillogin"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.emaillogin}
            />
            <label htmlFor="passwordlogin">Password:</label>
            <input
              className={styles.form_input}
              type="password"
              name="passwordlogin"
              id="passwordlogin"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordlogin}
            />
            <button type="submit" className={styles.submit_button} disabled={isSubmitting}>
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
