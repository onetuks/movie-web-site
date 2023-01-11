import React, { useState } from 'react';
import PropTypes from 'prop-types';

TimeConverter.PropTypes = {
	lock: PropTypes.bool.isRequired,
}

function TimeConverter({lock}) {
	const [value, setValue] = useState();
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<div>
				<label htmlFor="min">MIN  </label>
				<input
					value={!lock ? value : value * 60}
					id="min"
					placeholder="MIN"
					type="number"
					onChange={changeValue}
					disabled={lock}
				/>
			</div>
			<div>
				<label htmlFor="hour">HOUR</label>
				<input
					value={!lock ? Math.round(value / 60) : value}
					id="hour"
					placeholder="HOUR"
					type="number"
					onChange={changeValue}
					disabled={!lock}
				/>
			</div>
		</div>
	);
}

export default TimeConverter;