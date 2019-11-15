import React, { useContext } from 'react';
import styles from './header.module.css';
import img from '../../../static/favicon.ico';
import { Link } from 'gatsby';
import Search from '../Search';
import AuthContext from '../../utils/context';

const Header = () => {
  const context = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.left_header}>
        <Link to='/'>
          <img src={img} alt='' />
        </Link>
      </div>

      <div className={styles.mid_header}>
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
        <Link to='/blog' className={styles.header_link} activeClassName={styles.header_link_active}>
          Blog
        </Link>
        <Search />
        {!context.state.isAuthenticated && (
          <Link
            to='/login'
            className={styles.header_link}
            activeClassName={styles.header_link_active}
          >
            Login
          </Link>
        )}
        {context.state.isAuthenticated && (
          <Link
            to='/app/profile'
            className={styles.header_link}
            activeClassName={styles.header_link_active}
          >
            Profile
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
