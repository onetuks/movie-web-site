import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.PropTypes = {
	text: PropTypes.string,
}

function Button({text, onClick}) {
	return (
		<button 
			className={styles.btn}
			onClick={onClick}
			>
			{text}
		</button>
	);
}

export default Button;