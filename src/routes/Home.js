import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import Movie from '../Components/Movie.js';
import style from './Home.module.css';

function Home({ count }) {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	
	const getMovies = async () => {
		const json = await (
			await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	
	useEffect(() => {
		getMovies();
	}, []);
	
	useEffect(() => {
		if (!loading) {
			console.log("Movies : ", movies);
		}
	}, [loading]);
	
	// getMovies 함수 > state change func 두 개가 있기 때문에 새로 랜더링 할 때마다 두 번 실행됨.
	// console.log("Movies : ", Movies);
	// console.log("Movies : ", movies);

	return (
		<div className={style.container}>
			<div className="Header">
				<h3>Movie Bucket</h3>
			</div>
			<hr className="Line"/>
			<div className="Body">
				{loading ? (
					<div className={style.loader}>
						<span>Loading...</span>
					</div>
				) : (
					<div className={style.movies}>
						{movies.map((movie, index) => (
							<div key={index}>
								<Movie
									key={movie.id}
									id={movie.id}
									year={movie.year}
									coverImg={movie.medium_cover_image}
									title={movie.title}
									summary={movie.summary}
									genres={movie.genres}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;