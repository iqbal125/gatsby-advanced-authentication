import React from 'react';
import { Formik } from 'formik';
import styles from './auth.module.css';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyABrhAsT8e2cimHbPffpz-r2RkcgThSmR0',
  authDomain: 'react-gatsby1.firebaseapp.com'
};

firebase.initializeApp(config);

const callback1 = res => {
  console.log(res);
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult) {
      console.log(authResult);
      callback1(authResult);
    }
  }
};

const SignUpForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'A password is required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be 6 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.form_input}
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              border={errors.email ? '10px solid black' : null}
            />
            {errors.email && touched.email && (
              <span className={styles.error_text}>{errors.email}</span>
            )}
            <input
              className={styles.form_input}
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              border={errors.password && '1px solid red'}
            />
            {errors.password && touched.password && (
              <span className={styles.error_text}>{errors.password}</span>
            )}
            <button
              type='submit'
              className={styles.form_button}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignUpForm;
