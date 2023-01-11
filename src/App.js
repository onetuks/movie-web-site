import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Header/Header.js';
import SelectConverter from './Converter/SelectConverter.js';
import TimeConverter from './Converter/TimeConverter.js';
import DistanceConverter from './Converter/DistanceConverter.js';
import Button from './Button/Button.js';

const MemoButton = React.memo(Button);

function App() {
	const [toggle, setToggle] = useState(false);
	
	function changeToggleText() {
		setToggle((current) => !current);
	}
	
	return (
		<div className="App">
			<Header />
			<SelectConverter lock={toggle}/>
			<MemoButton text={toggle ? "Recover Unit" : "Reverse Unit"} onClick={changeToggleText}/>
			<MemoButton text="Reset" />
		</div>
	);
}

export default App;