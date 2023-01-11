import React, { useState } from 'react';
import TimeConverter from './TimeConverter.js';
import DistanceConverter from './DistanceConverter.js';

function SelectConverter() {
	const [value, setValue] = useState(0);
	
	const changeValue = (event) => {
		setValue(event.target.value);
	};
	
	return (
		<div>
			<div>
				<selct onChange={changeValue}>
					<option value={0}>Select Unit System to Convert</option>
					<option value={1}>Time Converter</option>
					<option value={2}>Distance Converter</option>
				</selct>
			</div>
			<hr/>
			<div>
				{value === 0 ? "Please Select Unit System" : null}
				{value === 1 ? <TimeConverter /> : null}
				{value === 2 ? <DistanceConverter /> : null}
			</div>
			<hr/>
		</div>
	);
}

export default SelectConverter;