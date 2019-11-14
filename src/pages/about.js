import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import AuthContext from '../utils/context';

const About = () => {
  const context = useContext(AuthContext);

  return (
    <Layout>
      <div>
        <div>About Page</div>
        <button onClick={() => console.log(context)}>Button</button>
      </div>
    </Layout>
  );
};

export default About;
