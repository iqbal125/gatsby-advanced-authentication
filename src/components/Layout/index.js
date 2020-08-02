import React from 'react';
import Footer from '../Footer';

import styles from './layout.module.css';
import SEO from '../SEO';

const Layout = ({ title, description, children }) => {
  const seoData = {
    title,
    description
  };

  return (
    <>
      <SEO seoData={seoData} />
      <div className={styles.layout}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
