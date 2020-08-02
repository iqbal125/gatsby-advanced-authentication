import React from 'react';
import Layout from '../components/Layout';
import './styles/global.css';
import { navigate } from 'gatsby';
import styles from './styles/home.module.css';
import image1 from '../../static/undraw_blank_canvas_3rbb.svg';

const Index = () => {
  return (
    <Layout>
      <div className={styles.home_wrapper}>
        <h1>
          This is a Sample App Only For Demonstration Purposes for a Server Side Authentication
          Project
        </h1>
        <h2>It is completely secure and free to use</h2>
        <button className={styles.submit_button} onClick={() => navigate('/app/login')}>
          Click Here to Login
        </button>
        <img className={styles.home_image} src={image1} alt="" />
      </div>
    </Layout>
  );
};

export default Index;
