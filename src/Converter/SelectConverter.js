import React, { useState } from 'react';

function SelectConverter() {
	const [value, setValue] = useState(0);
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<div className="SelectSection">
				<select onChange={changeValue}>
					<option value={0}>Select Unit System to Convert</option>
					<option value={1}>Time Unit System</option>
					<option value={2}>Distance Unit Syste</option>
				</select>
			</div>
			<hr/>
			<div className="ConveterSection">
				<h4>{value}</h4>
			</div>
			<hr/>
		</div>
	);
}

export default SelectConverter;