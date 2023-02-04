import React from 'react';

function Movie({ id, coverImg, title, summary, genres }) {
	
	console.log("Movie Component rendered");
	
	return (
		<div>
			<img src={coverImg} alt={id}></img>
			<h3>{title}</h3>
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