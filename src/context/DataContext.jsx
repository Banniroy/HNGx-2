import { createContext, useState, useEffect } from "react";
import axios from "../../api/axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);

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

	return (
		<DataContext.Provider
			value={{
				movies,
				posterBaseUrl,
				apiKey,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
