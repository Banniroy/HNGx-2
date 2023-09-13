import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast"; // Import the Toaster and toast

const Card = ({ posterBaseUrl, movie }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const showToast = () => {
		if (isFavorite) {
			toast.error(`${movie.title} Removed from favorites!`);
		} else {
			toast.success(`${movie.title} Added to favorites!`);
		}
	};

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
		showToast();
	};

	return (
		<div className="bg-white rounded-lg shadow-md flex flex-col justify-center">
			<Link to={`/movie/${movie.id}`} data-testid="movie-link">
				<img
					src={`${posterBaseUrl}${movie.poster_path}`}
					alt={movie.title}
					className="w-full h-auto"
					data-testid="movie-poster"
				/>
				<div className="p-4">
					<h2
						className="text-xl font-semibold"
						data-testid="movie-title"
					>
						{movie.title}
					</h2>
					<p
						className="text-gray-600"
						data-testid="movie-release-date"
					>
						Release Date: {movie.release_date}
					</p>
				</div>
			</Link>
			<button
				onClick={toggleFavorite}
				className={`p-2 text-xl cursor-pointer ${
					isFavorite ? "text-red-500" : "text-gray-400"
				}`}
				data-testid="favorite-button"
			>
				<FontAwesomeIcon
					icon={faHeart}
					className="text-2xl"
					data-testid="heart-icon"
				/>
			</button>
			<Toaster /> {/* Add the Toaster component */}
		</div>
	);
};

export default Card;
