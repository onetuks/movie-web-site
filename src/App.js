import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '.header/Header.js';
import Button from '.button/Button.js';
import SelectConverter from '.converter/SelectConverter.js';


const MemorizedButton = React.memo(Button);

function App() {
	return (
		<div className="App">
			<Header />
			<SelectConverter />
			<MemorizedButton text={"Convert Unit"} onClick={onConvert}/>
			<MemorizedButton text={"Reset"} onClick={onRest}/>
		</div>
	);
}

export default App;