import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import Movie from '../Components/Movie.js';

// react-grid-layout import
import { Responsive, WidthProvider } from 'react-grid-layout';
// React Grid Component
const ResponsiveGridLayout = WidthProvider(Responsive);

function Home({ count }) {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState([]);
	const [movies, setMovies] = useState([]);
	
	// Responsive Grid Layouts
	const LAYOUTS = {
		lg: [
			{ i:"0", x:0, y:0, w:1, h:5, minW:1, maxW:1, minH:1, maxH:10 },
			{ i:"1", x:1, y:0, w:1, h:5, minW:1, maxW:1, minH:1, maxH:10 },
			{ i:"2", x:2, y:0, w:1, h:5, minW:1, maxW:1, minH:1, maxH:10 },
		],
		md: [
			{ i:"0", x:0, y:0, w:1, h:3, minW:1, maxW:1, minH:1, maxH:2 },
			{ i:"1", x:1, y:0, w:1, h:3, minW:1, maxW:1, minH:1, maxH:2 },
			{ i:"2", x:0, y:1, w:1, h:3, minW:1, maxW:1, minH:1, maxH:2 },
		],
	};
	
	const getResponse = async () => {
		const json = await (
			await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
		).json();
		setResponse(json.data);
		setLoading(false);
		setMovies(json.data.movies.splice(json.data.movies.length-count));
	};

	useEffect(() => {
		getResponse();
	}, []);
	
	useEffect(() => {
		if (!loading) {
			console.log("Response : ", response);
			console.log("Movies : ", movies);
		}
	}, [loading]);
	
	// getResponse 함수 > state change func 두 개가 있기 때문에 새로 랜더링 할 때마다 두 번 실행됨.
	// console.log("Response : ", response);
	// console.log("Movies : ", movies);

	return (
		<div className="App">
			<div className="App-header">
				<img className="App-logo" src={logo} alt="" />
				<h3>Movie Listing WebSite</h3>
			</div>
			<div className="Body">
				{loading ? null : (
					<ResponsiveGridLayout
						className="layouts"
						layouts={LAYOUTS}
						breakpoints={{ lg: 1000, md: 600 }}
						cols={{ lg: 3, md:2 }}
					>
						{movies.map((movie, index) => (
							<div key={index}>
								<Movie
									key={movie.id}
									id={movie.id}
									coverImg={movie.medium_cover_image}
									title={movie.title}
									summary={movie.summary}
									genres={movie.genres}
								/>
							</div>
						))}
					</ResponsiveGridLayout>
				)}
			</div>
		</div>
	);
}

export default Home;