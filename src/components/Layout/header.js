import React from 'react';
import styles from './styles/header.module.css';
import img from '../../../static/favicon.ico';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left_header}>
        <Link to='/'>
          <img src={img} alt='' />
        </Link>
      </div>

      <div className={styles.right_header}>
        <Link
          to='/about'
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          About
        </Link>
        <Link
          to='/contact'
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          Contact
        </Link>
        <Link
          to='/blog'
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
