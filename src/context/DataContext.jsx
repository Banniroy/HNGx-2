import { createContext, useState, useEffect } from "react";
import axios from "../../api/axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [director, setDirector] = useState("");
	const [writers, setWriters] = useState([]);
	const [stars, setStars] = useState([]);

	const apiKey = "bb6392940bd784abea6b623f4c5859df";
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
				}
			} catch (error) {
				console.error("Error fetching top 10 movies:", error);
			}
		};

		fetchTop10Movies();
	}, []);

	// Function to fetch detailed movie information including director, writers, and stars =========>
	async function fetchMovieDetails(id) {
		try {
			// Make an API request to get detailed movie information
			const response = await axios.get(`/${id}/credits`, {
				params: {
					api_key: apiKey,
				},
			});

			if (response.status === 200) {
				const movieDetails = response.data;
				// Extract director, writers, and stars information from movieDetails
				const directorName = movieDetails.crew.find(
					(member) => member.job === "Director"
				);
				const writerNames = movieDetails.crew
					.filter((member) => member.department === "Writing")
					.map((writer) => writer.name);
				const cast = movieDetails.cast.map((actor) => actor.name);

				// Update state variables
				setDirector(directorName ? directorName.name : "");
				setWriters(writerNames.join(", ")); // Join writer names with a comma
				setStars(cast.slice(0, 10).join(", ")); // Limit to the first five stars and join with a comma
			} else {
				throw new Error("Failed to fetch movie details");
			}
		} catch (error) {
			// Handle errors here
			console.error("Error fetching movie details:", error);
		}
	}

	// ========>

	return (
		<DataContext.Provider
			value={{
				movies,
				posterBaseUrl,
				apiKey,
				director,
				writers,
				stars,
				fetchMovieDetails,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
