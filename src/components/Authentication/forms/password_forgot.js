import React, { useState } from 'react';
import { Formik } from 'formik';
import styles from './authform.module.css';
import axios from 'axios';

const PasswordForgot = () => {
  const handleSubmit = values => {
    let email = values.emailforgot;

    let data = {
      email
    };

    axios
      .post('http://localhost:3000/login', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
      <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor='emailforgot'>email:</label>
            <input
              className={styles.form_input}
              name='emailforgot'
              id='emailforgot'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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

export default PasswordForgot;
