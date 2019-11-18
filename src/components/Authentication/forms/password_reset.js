import React, { useState } from 'react';
import { Formik } from 'formik';
import styles from './authform.module.css';
import axios from 'axios';

const PasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);

  const handleSubmit = values => {
    setLoading(true);

    let email = values.emaillogin;
    let password = values.password.login;

    let data = {
      email,
      password
    };

    let handleAuthRes = res => {
      console.log(res);
      if (res.data.token) {
        //login success
        //redirect to profile page
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
      .post('http://localhost:3000/login', data)
      .then(res => handleAuthRes(res))
      .catch(err => handleAuthErr(err));
  };

  return (
    <div>
      {loading && (
        <>
          <div className={styles.loader}></div>
          <div className={styles.loading_background}></div>
        </>
      )}
      <h3>{resMessage}</h3>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='emaillogin'>username or email:</label>
            <input
              className={styles.form_input}
              name='emaillogin'
              id='emaillogin'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label htmlFor='passwordlogin'>password:</label>
            <input
              className={styles.form_input}
              type='passwordlogin'
              name='passwordlogin'
              id='passwordlogin'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <button type='submit' className={styles.form_button} disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;
