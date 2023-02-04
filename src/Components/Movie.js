import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, summary, genres }) {
	
	console.log("Movie Component rendered");
	
	// react-router-dom > Link
	// a 태그랑 동일한 동작을 하되, 전체 렌더링되지 않는다는게 차이점.
	
	return (
		<div>
			<img src={coverImg} alt={id}></img>
			<h2>
				<a href="/movie">a    tag : {title}</a>
				<br/>
				<Link to="/movie">link tag : {title}</Link>
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