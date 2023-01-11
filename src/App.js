import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './Header/Header.js';
import SelectConverter from './Converter/SelectConverter.js';

function App() {
	return (
		<div className="App">
			<Header />
			<SelectConverter />
		</div>
	);
}

export default App;