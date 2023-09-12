import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import your custom heart icon

const Card = ({ posterBaseUrl, movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToast } = useToasts();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      // Show a toast notification when removing from favorites
      addToast(`${movie.title} removed from favorites.`, {
        icon: "❌", // You can customize the icon
        appearance: "success",
      });
    } else {
      // Show a toast notification when adding to favorites
      addToast(`${movie.title} added to favorites!`, {
        icon: "❤️", // You can customize the icon
        appearance: "success",
      });
    }
  };

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
          {/* Use your custom FontAwesome heart icon */}
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </Link>
  );
};

export default Card;
