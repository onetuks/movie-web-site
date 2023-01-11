import React, { useState } from 'react';
import pt from 'prop-types'

DistanceConverter.pt = {
	lock: pt.bool.isRequired,
}

function DistanceConverter({lock}) {
	const [value, setValue] = useState();
	
	function changeValue(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<div>
				<label htmlFor="km">KM  </label>
				<input
					value={!lock ? value : value * 1000 / 621}
					id="km"
					placeholder="KM"
					type="number"
					onChange={changeValue}
					disabled={lock}
				/>
			</div>
			<div>
				<label htmlFor="mile">MILE</label>
				<input
					value={!lock ? value * 0.621 : value}
					id="mile"
					placeholder="MILE"
					type="number"
					onChange={changeValue}
					disabled={!lock}
				/>
			</div>
		</div>
	);
}

export default DistanceConverter;