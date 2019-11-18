import React, { useState } from 'react';
import { Formik } from 'formik';
import styles from './authform.module.css';
import axios from 'axios';

const PasswordForgot = () => {
  const [errorText, setError] = useState(false);
  const [resText, setRes] = useState(false);

  const handleSubmit = values => {
    let email = values.emailforgot;

    let data = {
      email
    };

    let handleRes = res => {
      // For Security Purposes dont display "Email not Found" response text
      if (res.statusText == 'OK') {
        setRes(true);
      } else {
        setError(true);
      }
    };

    axios
      .post('http://localhost:3000/forgot', data)
      .then(res => handleRes(res))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {errorText && <p>There was a problem with your request, please try again later</p>}
      {resText && <p>Email was successfully sent</p>}
      {!resText && !errorText && (
        <>
          <h3> Forgot Password </h3>
          <Formik initialValues={{ emailforgot: '' }} onSubmit={handleSubmit}>
            {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor='emailforgot'>email:</label>
                <input
                  className={styles.form_input}
                  name='emailforgot'
                  id='emailforgot'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emailforgot}
                />
                <button type='submit' className={styles.form_button} disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default PasswordForgot;
