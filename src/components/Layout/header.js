import React from 'react';
import styles from './styles/header.module.css';
import img from '../../../static/favicon.ico';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.left_header}>
				<img src={img} alt="" />
			</div>

			<div className={styles.right_header}>
				<div className={styles.header_link}>Link 1 </div>
				<div className={styles.header_link}>Link 2 </div>
				<div className={styles.header_link}>Link 3</div>
			</div>
		</header>
	);
};

export default Header;
