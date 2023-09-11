import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import axios from "../api/axios";

function App() {
	const [movies, setMovies] = useState([]);
	const [randomMovie, setRandomMovie] = useState(null);

	useEffect(() => {
		const fetchTop10Movies = async () => {
			try {
				const apiKey = "bb6392940bd784abea6b623f4c5859df";
				const response = await axios.get(
					`/top_rated?api_key=${apiKey}&language=en-US&page=1`
				);

				if (response.status === 200) {
					const top10Movies = response.data.results.slice(0, 10);
					setMovies(top10Movies);
					console.log(
						"Fetched data in JSON format:",
						JSON.stringify(top10Movies, null, 2)
					);
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
					element={<Home movies={movies} randomMovie={randomMovie} />}
				/>
				<Route exact path="/movie/:id" element={<MovieDetails />} />
			</Routes>
		</main>
	);
}

export default App;
