import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tmdbApi } from "../../api/axios";
import SideBbar from "./SideBbar";

const MovieDetails = ({ apiKey }) => {
	const posterBaseUrl = "https://image.tmdb.org/t/p/w780";
	const { movieId } = useParams();
	const [movie, setMovie] = useState(null);

	async function fetchMovieData(movieId) {
		try {
			// Fetch movie data based on the movieId from the TMDB API
			const response = await tmdbApi.get(`/movie/${movieId}`, {
				params: {
					api_key: apiKey,
				},
			});

			if (response.status === 200) {
				const movieData = response.data;
				setMovie(movieData);
			} else {
				throw new Error("Failed to fetch movie data");
			}
		} catch (error) {
			console.error("Error fetching movie data:", error);
			setMovie(null);
		}
	}

	useEffect(() => {
		// Fetch movie data when the component mounts
		fetchMovieData(movieId);
	}, [movieId]);

	if (!movie) {
		return <div>Loading...</div>; // Display loading message while fetching data
	}

	return (
		<div className="flex flex-row h-screen w-full">
			<SideBbar />
			<section className=" mx-6 w-[80%] flex flex-col items-center">
				<div className="border border-red-900 rounded-2xl w-[90%] h-[18rem] mt-8 overflow-y-hidden">
					{/* Movie Poster */}
					<img
						src={`${posterBaseUrl}${movie.poster_path}`}
						alt={movie.title}
						className="w-full h-auto object-contain"
					/>
				</div>

				<div className=" rounded-2xl w-[90%] h-[18rem] mt-8 text-gray-900">
					<section className=" w-full flex items-center h-8">
						{/* Movie Title */}
						<h2 className="movie-title">{movie.title}</h2>
					</section>
					<section className="flex mt-4">
						<div className="w-3/5 h-40">
							{/* Overview */}
							<p>{movie.overview}</p>
						</div>
						<div className="w-2/5 h-40"></div>
					</section>
				</div>
			</section>
		</div>
	);
};

export default MovieDetails;
