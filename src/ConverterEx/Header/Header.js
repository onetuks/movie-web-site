import React from 'react';
import logo from '../logo.svg';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={styles.header}>
			<img src={logo} alt="logo" className={styles.image}/>
			<h4>Super Converter</h4>
		</div>
	);
}

export default Header;