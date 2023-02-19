import React from 'react';
import './App.css';
import Home from './routes/Home.js';
import Detail from './routes/Detail.js';

// React Router
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

/* App Component
	- url 접근을 위한 컴포넌트
	- route 사용하기 위함
*/
function App() {
	return (
		<Router basename={process.env.PUBLIC_ULR}>
			<Routes>
				<Route path={`${process.env.PUBLIC_URL}/`} element={<Home count={3} />}/>
				<Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
				<Route path={`${process.env.PUBLIC_URL}/hello`} element={<h3>Hello</h3>} />
			</Routes>
		</Router>
	);
}

export default App;