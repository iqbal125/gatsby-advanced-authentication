import React from 'react';
import Layout from '../components/Layout';
import Auth from '../components/Authentication/auth';

const Login = () => {
  return (
    <Layout>
      <div>
        <Auth />
      </div>
    </Layout>
  );
};

export default Login;
