import React, { useState, useEffect } from 'react';
import pt from 'prop-types'

Converter.pt = {
	type: pt.string.isRequired,
	lock: pt.bool.isRequired,
	resetReq : pt.bool,
}

function Converter({type, lock, resetReq}) {
	const unitSystem = [["Min", "Hour"], ["Km", "Mile"]];
	const [unit, setUnit] = useState(unitSystem[Number(type)-1]);
	const [value, setValue] = useState(0);
	
	useEffect(() => {
		console.log("Converter is started");
		return () => { console.log("Converter is terminated") };
	}, []);
	
	useEffect(() => {
		console.log(type-1, unitSystem[type-1]);
		setUnit(unitSystem[type-1]);
		console.log("unit system is changed to ", unit);
	}, [type]);
	
	useEffect(() => {
		console.log("resetReq is receiving : ", resetReq);
		reset();
	}, [resetReq, lock, type]);
	
	function reset() {
		setValue(0);
	}
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<div>
				<label htmlFor={unit[0]}>{unit[0]}</label>
				<input
					value={type !== "1" ? (!lock ? value : value * 1000 / 621) : (!lock ? value : value * 60)}
					id={unit[0]}
					placeholder={unit[0]}
					type="number"
					onChange={changeValue}
					disabled={lock}
				/>
			</div>
			<div>
				<label htmlFor={unit[1]}>{unit[1]}</label>
				<input
					value={type !== "1" ? (!lock ? value * 0.621 : value) : (!lock ? Math.round(value / 60) : value)}
					id={unit[1]}
					placeholder={unit[1]}
					type="number"
					onChange={changeValue}
					disabled={!lock}
				/>
			</div>
		</div>
	);
}

export default Converter;