import React from "react";
import { Link } from "react-router-dom";

const Card = ({ posterBaseUrl, movie }) => {
	return (
		<Link
			to={`/movie/${movie.id}`}
			className="flex flex-col max-w-xs text-gray-900"
			data-testid="movie-card"
		>
			<img
				src={`${posterBaseUrl}${movie.poster_path}`}
				alt={movie.title}
				data-testid="movie-poster"
				className="h-auto max-w-xs pb-3"
			/>
			<div className="flex flex-col pt-3">
				<h2
					data-testid="movie-title"
					className="font-semibold text-lg pb-3"
				>
					{movie.title}
				</h2>
				<p data-testid="movie-release-date" className="pb-2">
					Release Date: {movie.release_date}
				</p>
			</div>
		</Link>
	);
};

export default Card;

// {
// 	"adult": false,
// 	"backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
// 	"genre_ids": [
// 	  18,
// 	  80
// 	],
// 	"id": 238,
// 	"original_language": "en",
// 	"original_title": "The Godfather",
// 	"overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
// 	"popularity": 132.488,
// 	"poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
// 	"release_date": "1972-03-14",
// 	"title": "The Godfather",
// 	"video": false,
// 	"vote_average": 8.7,
// 	"vote_count": 18602
//  },
