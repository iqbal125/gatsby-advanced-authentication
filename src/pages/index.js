import React from 'react';
import Layout from '../components/Layout';
import './styles/global.css';
import { navigate } from 'gatsby';

const Index = () => {
  return (
    <Layout>
      <h1> This is a Sample App Only For Demonstration Purposes for a Server Side Project </h1>
      <button onClick={() => navigate('/app/login')}>Click Here to Login</button>
    </Layout>
  );
};

export default Index;
