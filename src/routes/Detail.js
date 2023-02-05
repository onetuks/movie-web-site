import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from './Detail.module.css';
import logo from "../logo.svg";

function Detail() {
	// const id = useParams(); -> result : {id : nnnn}
	const { id } = useParams(); // -> result : nnnn
	
	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(true);
	
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json);
		setMovie(json.data.movie);
		setLoading(false);
	};
	
	function starRate(value) {
		var result = value+" (";
		var bound = Math.round(value);
		console.log(bound);
		for (var i = 0; i < 10; i++) {
			if (i < bound)
				result += '★';	
			else 
				result += "☆";
		}
		return result+")";
	}

	useEffect(() => {
		getMovie();
	}, []);
	
	console.log(movie);

	return (
		<div className={style.Root}>
			<div className={style.Header}>
				<img src={logo} alt="logo" className={style.Logo} height="50px"/>
				<h3>Detail of chosen Movie</h3>
			</div>
			<hr className={style.Line} style={{ marginBottom:"50px" }} />
			<div className={style.Body}>
				{loading ? (
					<div>
						<img src={logo} alt="logo" className={style.Logo}/>
						<h3 align="center">Movie Details on loading...</h3>
					</div>
				) : (
					<div>
						<img src={movie.medium_cover_image} alt={movie.title}/>
						<h2>{movie.title}</h2>
						<br/>
						<br/>
						<div>
							<h4>Genres</h4>
							<ul>
								{movie.genres.map((gen, idx) => {
									return <li key={idx} style={{listStyle:"none"}}>{gen}</li>
								})}
							</ul>
						</div>
						<p>{movie.description_full}</p>
						<p>Year : {movie.year}</p>
						<p>Rate : {starRate(movie.rating)}</p>
						<p>RunT : {movie.runtime}</p>
						<Link to={movie.url}>More Details</Link>
					</div>
				)}
			</div>
			<hr className={style.Line} style={{ marginTop:"50px" }} />
			<div className={style.Footer}>
				<h6>Only for React Practice. Not for Commercial</h6>
			</div>
		</div>
	);
}

export default Detail;