import React, { useState } from 'react';
import styles from './auth.module.css';
import axios from 'axios';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import LoginForm from './forms/loginform';
import SignUpForm from './forms/signupform';

const config = {
  apiKey: 'AIzaSyABrhAsT8e2cimHbPffpz-r2RkcgThSmR0',
  authDomain: 'react-gatsby1.firebaseapp.com'
};

firebase.initializeApp(config);

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setresMessage] = useState(null);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult) {
        console.log(authResult);
        saveProfile(authResult);
        return false;
      },
      signInFailure: function(error) {
        console.log(error);
      }
    }
  };

  const sendProfiletoDB = data => {
    axios
      .post('http://localhost:3000/autho2signup', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const saveProfile = authResult => {
    let provider = authResult.additionalUserInfo.providerId;

    if (provider === 'google.com') {
      //the user will not sign in with this password
      //it is only a placeholder password for the db
      let email = authResult.additionalUserInfo.profile.email;
      let username = authResult.additionalUserInfo.profile.name;
      let password = authResult.additionalUserInfo.profile.id;

      let data = {
        email,
        username,
        password,
        provider
      };

      sendProfiletoDB(data);
    }

    if (provider === 'github.com') {
      let email = authResult.additionalUserInfo.profile.email;
      let username = authResult.additionalUserInfo.username;
      let password = authResult.additionalUserInfo.profile.id;

      let data = {
        email,
        username,
        password,
        provider
      };

      sendProfiletoDB(data);
    }

    if (provider === 'facebook.com') {
      let email = authResult.additionalUserInfo.profile.email;
      let username = authResult.additionalUserInfo.name;
      let password = authResult.additionalUserInfo.profile.id;

      let data = {
        email,
        username,
        password,
        provider
      };

      sendProfiletoDB(data);
    }
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
      <LoginForm />
      <SignUpForm />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Auth;
