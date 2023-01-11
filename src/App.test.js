import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
// import './App.css';

// function App() {
// 	const [value, setValue] = useState("Save Change");
	
// 	function changeValue() {
// 		setValue(value === "Save Change" ? "Revert Change" : "Save Change");
// 	}
	
// 	return (
// 		<div className="App">
// 			<div>
// 				<img src={logo} height="50px" width="50px" alt="React Logo"/>
// 				<h4><b>Super Converter</b></h4>
// 			</div>
// 			<ChooseConverter />
// 			<MemorizedCustomButton text={value} onClick={changeValue} big={true} fontSize={18}/>
// 			<MemorizedCustomButton text="Continue" big={false} fontSize={16}/>
// 		</div>
// 	);
// }

// function Timer() {
// 	const [timer, setTimer] = useState("00:00:00");
	
// 	const date = new Date();
// 	const currentTimer = () => {
// 		const hours = String(date.getHours());
// 		const mins = String(date.getMinuites());
// 		const secs = String(date.getSeconds());
// 		setTimer('${hours}:{mins}:{secs}')
// 	}
	
// 	function refresh() {
// 		setInterval(currentTimer, 1000);
// 	}
	
// 	refresh();
	
// 	return (
// 		<div>
// 			<p>Timer : {timer}</p>
// 			<button onClick={refresh}>Refresh Timer</button>
// 		</div>
// 	);
// }

// function ChooseConverter() {
// 	const [index, setIndex] = useState("xx");
	
// 	function onSelectChange(event) {
// 		setIndex(event.target.value);
// 	}
	
// 	return (
// 		<div>
// 			<select onChange={onSelectChange}>
// 				<option value="xx">Select your units</option>
// 				<option value="0">Minutes to Hours</option>
// 				<option value="1">Km to Miles</option>
// 			</select>
// 			<hr />
// 			{index === "xx" ? "Please select your units" : null}
// 			{index === "0" ? <MinutesToHours /> : null}
// 			{index === "1" ? <KmToMiles/> : null}
// 			<hr />
// 		</div>
// 	);
// }

// // * React Memo
// // 이제 App 컴포넌트에서 state 변경 때마다 CustomButton 컴포넌트 들이 모두 다시 랜더링 되지 않고, 필요한 요소만 랜더링 함
// const MemorizedCustomButton = React.memo(CustomButton);

// // 안타깝게도 chrome://inspect 에서는 type check warning 안 해주는 것 같음. 
// CustomButton.PropTypes = {
// 	text: PropTypes.string.isRequired,
// 	big: PropTypes.bool,
// 	fonSize: PropTypes.number,
// }

// // function CustomButton(props) {
// function CustomButton({text, onClick, big, fontSize}) {
// 	console.log(text, "was rendered");
// 	return (
// 		<button 
// 			onClick={onClick}
// 			style= {{
// 				backgroundColor: "tomato",
// 				color: "white",
// 				padding: big ? "20px 30px" : "10px 20px",
// 				border: 0,
// 				borderRadius: 20,
// 				fontSize : {fontSize},
// 			}}
// 		>
// 			{text}
// 		</button>
// 	);
// }

// // 1km = 0.621 miles
// function KmToMiles() {
	
// 	const [distance, setDistance] = useState();
// 	const [inverted, setInverted] = useState(false);
	
// 	function onChange(event) { 
// 		setDistance(event.target.value);
// 	}
	
// 	const reset = () => {
// 		setDistance(0);
// 	};
	
// 	const onInverted = () => {
// 		reset();
// 		setInverted((current) => !current);	
// 	};
	
// 	return (
// 		<div>
// 			<div>
// 				<label htmlFor="km">KM</label>
// 				<input
// 					value={inverted ? distance * 1000 / 621 : distance}
// 					id="km"
// 					placeholder="KM"
// 					type="number"
// 					onChange={onChange}
// 					disabled={inverted}
// 				/>
// 			</div>
// 			<div>
// 				<label htmlFor="mile">MILE</label>
// 				<input 
// 					value={inverted ? distance : distance * 0.621}
// 					id="mile"
// 					placeholder="MILE"
// 					type="number"
// 					onChange={onChange}
// 					disabled={!inverted}
// 				/>
// 			</div>
// 			<button onClick={reset}>Reset Dist</button>
// 			<button onClick={onInverted}>Invert Dist</button>
// 		</div>
// 	);
// }

// function MinutesToHours() {
	
// 	const [amount, setAmount] = useState();
// 	const [inverted, setInverted] = useState(false);
	
// 	function onChange(event) {
// 		setAmount(event.target.value);
// 	}
	
// 	function reset() {
// 		setAmount(0);
// 	}
	
// 	function onInverted() {
// 		reset();
// 		setInverted((current)=>!current);
// 	}
	
// 	return (
// 	  <div>
// 		<div>
// 			<label htmlFor="minutes">Minutes</label>
// 			<input
// 				value={inverted ? amount * 60 : amount}
// 				id="minutes"
// 				placeholder="Minutes"
// 				type="number"
// 				onChange={onChange}
// 				disabled={inverted}
// 			/>
// 		</div>
// 		<h4>You want to convert {amount}</h4>
// 		<div>
// 			<label htmlFor="hours">Hours</label>
// 			<input
// 				value={inverted ? amount : Math.round(amount / 60)}
// 				id="hours"
// 				placeholder="Hours"
// 				type="number"
// 				onChange={onChange}
// 				disabled={!inverted}
// 			/>
// 		</div>
// 		<button onClick={reset}>Reset</button>
// 		<button onClick={onInverted}>{inverted ? "Turn Back" : "Invert"}</button>
// 	  </div>
// 	);
// }

// export default App;

