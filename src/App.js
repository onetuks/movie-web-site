import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	
	const getMovies = async () => {
		const json = await (
			await fetch(
				'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
			)
		).json();
		setMovies(json.data);
		setLoading(false);
		console.log(json.data);
	};
	
	useEffect(()=>{
		getMovies();
	}, []);
	
	// getMovies 함수 > state change func 두 개가 있기 때문에 새로 랜더링 할 때마다 두 번 실행됨. 
	// console.log(movies);
	
	return (
		<div className="App">
			<div className="App-header">
				<img className="App-logo" src={logo} alt=""/>
				<h3>Movie Listing WebSite</h3>
			</div>
			<div className="Body">
				{loading ? null : (
					<div>
						{movies.movies.map((movie) => (
							<div key={movie.id}>
								<img src={movie.medium_cover_image}></img>
								<h3>{movie.title}</h3>
								<p>{movie.summary}</p>
								<ul>
									{movie.genres.map((gen, idx) => (
										<li key={idx}>{gen}</li>
									))}
								</ul>
								<br/>
								<br/>
							</div>
						))}
					</div>
				)}
			</div>
			<div className="App-header">
				{loading ? null : (
					<div className="Meta">
						<p>count : {movies.movie_count}</p>
						<p>{movies.page_number}/{movies.limit}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;