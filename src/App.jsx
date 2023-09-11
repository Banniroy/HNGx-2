import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import SearchInput from "./components/SearchInput";
import axios from "../api/axios";

function App() {
	const [movies, setMovies] = useState([]);

	const apiKey = "bb6392940bd784abea6b623f4c5859df";
	// Define the base URL for poster images
	const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		const fetchTop10Movies = async () => {
			try {
				const response = await axios.get(
					`/top_rated?api_key=${apiKey}&language=en-US&page=1`
				);

				if (response.status === 200) {
					const top10Movies = response.data.results.slice(0, 10);
					setMovies(top10Movies);
					// console.log(
					// 	"Fetched data in JSON format:",
					// 	JSON.stringify(top10Movies, null, 2)
					// );
				}
			} catch (error) {
				console.error("Error fetching top 10 movies:", error);
			}
		};

		fetchTop10Movies();
	}, []);

	return (
		<main className="App h-full w-full">
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Home movies={movies} posterBaseUrl={posterBaseUrl} />
					}
				/>
				{/* Use the useParams hook to get the movieId from the URL */}
				<Route
					exact
					path="/movie/:movieId"
					element={<MovieDetails apiKey={apiKey} />}
				/>
				<Route exact path="/search" element={<SearchInput />} />
			</Routes>
		</main>
	);
}

export default App;
