import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import AuthContext from '../utils/context';
import { navigate } from 'gatsby';
import Routes from '../components/Routes';

const About = () => {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <Routes />
      <div>
        <div>About Page</div>
        <button onClick={() => console.log(context)}>Button</button>
        <button onClick={() => context.LogOut()}>Button</button>
      </div>
    </Layout>
  );
};

export default About;
