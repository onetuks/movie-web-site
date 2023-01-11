import React, { useState } from 'react';

function DistanceConverter() {
	
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
			<div className="km">
				<label htmlFor="km">KM      </label>
				<input 
					value={value}
					id="km"
					placeholder="KM"
					type="number"
					onChange={changeValue}
					disabled={disabled}
				/>
			</div>
			<div className="mile">
				<label htmlFor="mile">MILES   </label>
				<input
					value={value}
					id="mile"
					placeholder="MILES"
					type="number"
					onChange={changeValue}
					disabled={!disabled}
				/>
			</div>
		</div>
	);
}

export default DistanceConverter;