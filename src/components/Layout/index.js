import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
