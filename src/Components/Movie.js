import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// PropTypes 선언
// 컴포넌트명.propTypes = {}
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function Movie({ id, coverImg, title, summary, genres }) {
	// react-router-dom > Link
	// a 태그랑 동일한 동작을 하되, 전체 렌더링되지 않는다는게 차이점.
	
	return (
		<div>
			<img src={coverImg} alt={id}></img>
			<h2>
				<a href={`/movie/${id}`}>a    tag : {title}</a>
				<br/>
				<Link to={`/movie/${id}`}>link tag : {title}</Link>
			</h2>
			<p>{summary}</p>
			<ul>
				{genres.map((gen, idx) => (
					<li key={idx}>{gen}</li>
				))}
			</ul>
			<br />
			<br />
		</div>
	);
}

export default Movie;