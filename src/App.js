import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [index, setIndex] = useState("xx");
	
	function onSelectChange(event) {
		setIndex(event.target.value);
	}
	
	return (
		<div className="App">
			<h4>Super Converter</h4>
			<select onChange={onSelectChange}>
				<option value="xx">Select your units</option>
				<option value="0">Minutes to Hours</option>
				<option value="1">Km to Miles</option>
			</select>
			<hr />
			{index === "xx" ? "Please select your units" : null}
			{index === "0" ? <MinutesToHours /> : null}
			{index === "1" ? <KmToMiles/> : null}
			<hr />
			<CustomButton banana="Save Changes" big={true}/>
			<CustomButton banana="Continue" big={false}/>
		</div>
	);
}

// function CustomButton(props) {
function CustomButton({banana, big}) {
	console.log(banana, big);
	return (
		<button 
			style= {{
				backgroundColor: "tomato",
				color: "white",
				padding: "10px 20px",
				border: 0,
				borderRadius: big ? 20 : 10,
				fontSize : big ? 18 : 16,
			}}
		>
			{banana}
		</button>
	);
}

// 1km = 0.621 miles
function KmToMiles() {
	
	const [distance, setDistance] = useState();
	const [inverted, setInverted] = useState(false);
	
	function onChange(event) { 
		setDistance(event.target.value);
	}
	
	const reset = () => {
		setDistance(0);
	};
	
	const onInverted = () => {
		reset();
		setInverted((current) => !current);	
	};
	
	return (
		<div>
			<div>
				<label htmlFor="km">KM</label>
				<input
					value={inverted ? distance * 1000 / 621 : distance}
					id="km"
					placeholder="KM"
					type="number"
					onChange={onChange}
					disabled={inverted}
				/>
			</div>
			<div>
				<label htmlFor="mile">MILE</label>
				<input 
					value={inverted ? distance : distance * 0.621}
					id="mile"
					placeholder="MILE"
					type="number"
					onChange={onChange}
					disabled={!inverted}
				/>
			</div>
			<button onClick={reset}>Reset Dist</button>
			<button onClick={onInverted}>Invert Dist</button>
		</div>
	);
}

function MinutesToHours() {
	
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
	  <div>
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
