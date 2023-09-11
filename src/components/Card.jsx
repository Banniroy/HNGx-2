import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
	// Define the base URL for poster images
	const posterBaseUrl = "https://image.tmdb.org/t/p/w500"; // You may need to adjust the image size (w500) based on your needs

	return (
		<Link
			to={`/movie/${movie.id}`}
			className="flex flex-col border max-w-xs border-blue-900"
			data-testid="movie-card"
		>
			<img
				src={`${posterBaseUrl}${movie.poster_path}`}
				alt={movie.title}
				data-testid="movie-poster"
				className="h-auto max-w-xs"
			/>
			<h2 data-testid="movie-title">{movie.title}</h2>
			<p data-testid="movie-release-date">
				Release Date: {movie.release_date}
			</p>
		</Link>
	);
};

export default Card;
