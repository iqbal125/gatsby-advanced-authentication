import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';
import AuthProvider from '../AuthProvider';

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
