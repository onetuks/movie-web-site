import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Movie.module.css';
import logo from '../logo.svg';

function Movie({ id, coverImg, title, year, summary, genres }) {
	// react-router-dom > Link
	// a 태그랑 동일한 동작을 하되, 전체 렌더링되지 않는다는게 차이점.
	
	function getDefaultImg(event) {
		event.target.src = logo;
	}
	
	return (
		<div className={style.movie}>
			<img src={coverImg} alt={id} onError={getDefaultImg} className={style.movie_img}/>
			<div>
				<h2 className={style.movie_title}>
					<Link to={`/movie/${id}`}>{title}</Link>
				</h2>
				<h3 className={style.movie_year}>{year}</h3>
				<p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
				<ul className={style.movie_genres}>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Movie;

// PropTypes 선언
// 컴포넌트명.propTypes = {}
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
