import React from "react";

const MovieDetails = ({ movie }) => {
	async function fetchMovieData(movieId) {
		try {
			// Fetch movie data based on the movieId from your API or data source
			const response = await fetch(`/api/movies/${movieId}`);
			if (response.ok) {
				const movieData = await response.json();
				return movieData;
			} else {
				throw new Error("Failed to fetch movie data");
			}
		} catch (error) {
			console.error("Error fetching movie data:", error);
			return null;
		}
	}

	return (
		<div className="movie-details">
			{/* Movie Poster */}
			<img
				src={movie.poster_path}
				alt={movie.title}
				className="movie-poster"
			/>

			{/* Movie Title */}
			<h2 className="movie-title">{movie.title}</h2>

			{/* Release Date */}
			<p className="movie-release-date">
				Release Date: {movie.release_date}
			</p>

			{/* Overview */}
			<div className="movie-overview">
				<h3>Overview</h3>
				<p>{movie.overview}</p>
			</div>

			{/* Other Movie Details */}
			<div className="other-details">
				{/* Genre */}
				<p className="movie-genre">
					Genre: {movie.genres.map((genre) => genre.name).join(", ")}
				</p>

				{/* Popularity */}
				<p className="movie-popularity">
					Popularity: {movie.popularity}
				</p>

				{/* Vote Average */}
				<p className="movie-vote-average">
					Vote Average: {movie.vote_average}
				</p>

				{/* Vote Count */}
				<p className="movie-vote-count">
					Vote Count: {movie.vote_count}
				</p>
			</div>
		</div>
	);
};

export default MovieDetails;
