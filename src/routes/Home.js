import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import Movie from '../Components/Movie.js';

function Home() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const getMovies = async () => {
		const json = await (
			await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
		).json();
		setMovies(json.data);
		setLoading(false);
		console.log(json.data);
	};

	useEffect(() => {
		getMovies();
	}, []);

	// getMovies 함수 > state change func 두 개가 있기 때문에 새로 랜더링 할 때마다 두 번 실행됨.
	// console.log(movies);

	return (
		<div className="App">
			<div className="App-header">
				<img className="App-logo" src={logo} alt="" />
				<h3>Movie Listing WebSite</h3>
			</div>
			<div className="Body">
				{loading ? null : (
					<div>
						{movies.movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								coverImg={movie.medium_cover_image}
								title={movie.title}
								summary={movie.summary}
								genres={movie.genres}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;