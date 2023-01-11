import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.PropTypes = {
	text: PropTypes.string.isRequired,
}

function Button({text}) {
	return (
		<div className="Button">
			<button className={styles.btn}>{text}</button>
		</div>
	);
}

export default Button;