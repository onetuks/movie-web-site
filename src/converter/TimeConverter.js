import React, { useState } from 'react';

function TimerConverter() {
	
	const [value, setValue] = useState();
	const [disabled, setDisabled] = useState(false);
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	function changeDisabled() {
		setDisabled((curr) => !curr);
	}
	
	return (
		<div>
			<div className="Min">
				<label htmlFor="min">MINUTES  </label>
				<input 
					value={value}
					id="min"
					placeholder="MINS"
					type="number"
					onChange={changeValue}
					disabled={disabled}
				/>
			</div>
			<div className="Hour">
				<label htmlFor="hour">HOURS   </label>
				<input
					value={value}
					id="hour"
					placeholder="HOURS"
					type="number"
					onChange={changeValue}
					disabled={!disabled}
				/>
			</div>
		</div>
	);
}

export default TimerConverter;