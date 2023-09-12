import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import the heart icon

const Card = ({ posterBaseUrl, movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="grid text-gray-900 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      data-testid="movie-card"
    >
      <img
        src={`${posterBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
        className="h-auto max-w-xs pb-3"
      />
      <div className="flex flex-col pt-3">
        <h2 data-testid="movie-title" className="font-semibold text-lg pb-3">
          {movie.title}
        </h2>
        <p data-testid="movie-release-date" className="pb-2">
          Release Date: {movie.release_date}
        </p>
        <button
          onClick={toggleFavorite}
          className={`text-xl cursor-pointer ${
            isFavorite ? "text-red-500" : "text-gray-400"
          }`}
        >
          {/* Use the FontAwesome heart icon */}
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </Link>
  );
};

export default Card;
