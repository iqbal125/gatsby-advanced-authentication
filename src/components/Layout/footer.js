import React from 'react';
import styles from './styles/footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer_wrapper}>
			<div className={styles.footer_buffer}> </div>

			<div className={styles.footer_main}>
				<div className={styles.left_footer}>
					<div className={styles.footer_link}>Link 1 </div>
					<div className={styles.footer_link}>Link 2 </div>
					<div className={styles.footer_link}>Link 3</div>
				</div>

				<div className={styles.right_footer}>
					<div className={styles.footer_link}>Link 1 </div>
					<div className={styles.footer_link}>Link 2 </div>
					<div className={styles.footer_link}>Link 3</div>
				</div>
			</div>

			<div className={styles.footer_bottom}>
				<div> &copy; 2015 yoursite.com</div>
			</div>
		</div>
	);
};

export default Footer;
