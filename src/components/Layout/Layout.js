import React from 'react';
import Footer from './footer';
import Header from './header';
import styles from './styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
