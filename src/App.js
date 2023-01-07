import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	
	const [amount, setAmount] = useState();
	const [inverted, setInverted] = useState(false);
	
	function onChange(event) {
		setAmount(event.target.value);
	}
	
	function reset() {
		setAmount(0);
	}
	
	function onInverted() {
		reset();
		setInverted((current)=>!current);
	}
	
	return (
	  <div className="App">
		<h4>Super Converter</h4>
		<div>
			<label htmlFor="minutes">Minutes</label>
			<input
				value={inverted ? amount * 60 : amount}
				id="minutes"
				placeholder="Minutes"
				type="number"
				onChange={onChange}
				disabled={inverted}
			/>
		</div>
		<h4>You want to convert {amount}</h4>
		<div>
			<label htmlFor="hours">Hours</label>
			<input
				value={inverted ? amount : Math.round(amount / 60)}
				id="hours"
				placeholder="Hours"
				type="number"
				onChange={onChange}
				disabled={!inverted}
			/>
		</div>
		<button onClick={reset}>Reset</button>
		<button onClick={onInverted}>{inverted ? "Turn Back" : "Invert"}</button>
	  </div>
	);
}

export default App;
