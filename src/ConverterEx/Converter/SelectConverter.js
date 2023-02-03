import React, { useState } from 'react';
import Converter from './Converter.js';
import propTypes from 'prop-types';

SelectConverter.propTypes = {
	lock: propTypes.bool.isRequired,
	resetReq : propTypes.bool,
}

function SelectConverter({lock, resetReq}) {
	const [value, setValue] = useState("0");
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<div className="SelectSection">
				<select onChange={changeValue}>
					<option value="0">Select Unit System to Convert</option>
					<option value="1">Time Unit System</option>
					<option value="2">Distance Unit System</option>
				</select>
			</div>
			<hr/>
			<div className="ConveterSection">
				{value === "0" ? "Please Select Unit System" : <Converter type={value} lock={lock} resetReq={resetReq}/>}
			</div>
			<hr/>
		</div>
	);
}

export default SelectConverter;