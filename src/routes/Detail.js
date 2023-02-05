import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
	const [movie, setMovie] = useState();
	
	const getMovie = async () => {
		const json = await (
			await fetch('https://yts.mx/api/v2/list_movies.json?movie_id=${id}')
		).json();
		console.log(json);
	};
	
	console.log('Detail Component rendered');

	// const id = useParams(); -> result : {id : nnnn}
	const { id } = useParams(); // -> result : nnnn
	console.log(id);
	
	useEffect(() => {
		getMovie();
	}, []);

	return <h3>Detail</h3>;
}

export default Detail;