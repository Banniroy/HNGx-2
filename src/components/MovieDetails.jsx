import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import DataContext from "../context/DataContext";
import SideBbar from "./SideBbar";

const posterBaseUrl = "https://image.tmdb.org/t/p/w780";

const MovieDetails = () => {
	const { apiKey } = useContext(DataContext);
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	async function fetchMovieData(id) {
		try {
			// Fetch movie data based on the movieId from the TMDB API
			const response = await axios.get(`/${id}`, {
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
		fetchMovieData(id);
	}, [id]);

	if (!movie) {
		return <div>Loading...</div>;
	}

	return (
    <div className="flex flex-row h-screen w-full">
      <SideBbar />
      <section className="mx-6 w-[80%] flex flex-col items-center">
        <div className="border border-red-900 rounded-2xl w-[90%] h-[18rem] mt-8 overflow-y-hidden">
          <img
            src={`${posterBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="rounded-2xl w-[90%] h-[18rem] mt-8 text-gray-900">
          <section className="w-full flex items-center h-8">
            <h2 data-testid="movie-title">{movie.title}</h2>
          </section>
          <section className="flex mt-4 gap-3">
            <div className="w-3/5 h-40 border border-rose-700 p-4 rounded-lg">
              <p data-testid="movie-overview">{movie.overview}</p>
            </div>
            <div className="w-2/5 h-40 p-4 border rounded-lg border-rose-700">
              <p data-testid="movie-release-date">
                Release Date (UTC): {movie.release_date}
              </p>
              <p data-testid="movie-runtime">Runtime (minutes): {movie.runtime}</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;

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
