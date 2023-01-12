import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header.js';
import SelectConverter from './Converter/SelectConverter.js';
import Button from './Button/Button.js';

const MemoButton = React.memo(Button);

function App() {
	const [toggle, setToggle] = useState(false);
	const [resetReq, setResetReq] = useState(false);
	
	function changeToggleText() {
		console.log(toggle ? "Recovered!" : "Reverted!");
		setToggle((current) => !current);
	}
	
	function onReset() {
		console.log("Reset button Clicked!");
		setResetReq((current) => !current);
	}
	
	return (
		<div className="App">
			<Header />
			<SelectConverter lock={toggle} resetReq={resetReq}/>
			<MemoButton text={toggle ? "Recover Unit" : "Reverse Unit"} onClick={changeToggleText}/>
			<MemoButton text="Reset" onClick={onReset}/>
		</div>
	);
}

export default App;