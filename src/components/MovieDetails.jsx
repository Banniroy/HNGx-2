import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faArrowDown,
	faEllipsisV,
	faCalendar,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../api/axios";
import DataContext from "../context/DataContext";
import SideBbar from "./SideBbar";
import Loading from "./Loading-state/Loading";

const MovieDetails = () => {
	const { apiKey, posterBaseUrl } = useContext(DataContext);
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
		return (
			<div className="h-full w-full flex justify-center items-center ">
				<Loading />
			</div>
		);
	}

	// Function to calculate rating percentage
	const RatePercentage = (voteAverage) => {
		// Calculate the percentage and round it to one decimal place
		const percentage = (voteAverage / 10) * 100;
		return percentage.toFixed(1);
	};

	const formatVoteCount = (count) => {
		if (count >= 1000) {
			const roundedCount = Math.round(count / 100) / 10;
			return `${roundedCount}k`;
		}
		return count.toString();
	};

	const allGenres = [
		{ id: 28, name: "Action" },
		{ id: 12, name: "Adventure" },
		{ id: 16, name: "Animation" },
		{ id: 35, name: "Comedy" },
		{ id: 80, name: "Crime" },
		{ id: 99, name: "Documentary" },
		{ id: 18, name: "Drama" },
		{ id: 10751, name: "Family" },
		{ id: 14, name: "Fantasy" },
		{ id: 36, name: "History" },
		{ id: 27, name: "Horror" },
		{ id: 10402, name: "Music" },
		{ id: 9648, name: "Mystery" },
		{ id: 10749, name: "Romance" },
		{ id: 878, name: "Science Fiction" },
		{ id: 10770, name: "TV Movie" },
		{ id: 53, name: "Thriller" },
		{ id: 10752, name: "War" },
		{ id: 37, name: "Western" },
	];

	// Function to get genre names based on genre IDs
	const getGenreNames = (genreIds) => {
		if (!Array.isArray(genreIds)) {
			return "Genre data not available";
		}

		const genreNames = genreIds.map((genreId) => {
			const genre = allGenres.find((genre) => genre.id === genreId);
			return genre ? genre.name : "";
		});
		return genreNames.filter(Boolean).join(", ");
	};

	return (
		<section className="m-h-screen md:h-screen w-full flex justify-center">
			<div className="w-[90%] md:w-full h-full flex flex-row gap-10">
				<SideBbar />

				<section className=" w-full md:w-[80%] flex flex-col justify-evenly items-center">
					<div className="border border-red-900 rounded-2xl w-full h-[47%] overflow-y-hidden relative">
						<img
							src={`${posterBaseUrl}${movie.poster_path}`}
							alt={movie.title}
							className="w-full h-auto object-contain"
						/>
						<FontAwesomeIcon
							className="text-2xl sm:text-3xl md:first-letter:text-5xl lg:text-7xl absolute top-[50%] left-[50%] text-black opacity-70"
							icon={faPlay}
						/>
					</div>

					<div className="w-full h-fit md:h-[45%] text-gray-900 my-7">
						<section className="w-full flex flex-col items-center justify-between md:flex-row min-h-[4rem] md:h-8 text-slate-700">
							<div className=" w-full md:w-[61%] flex gap-3  md:gap-6 items-center md:text-xl">
								<h2
									className="font-semibold"
									data-testid="movie-title"
								>
									{movie.title}
								</h2>
								<p data-testid="movie-release-date">
									{movie.release_date}
								</p>
								<p data-testid="movie-runtime">
									{movie.runtime}min
								</p>
								<p className="border text-sm border-rose-700 rounded-md px-1 text-rose-700">
									Actions
									{/* {movie.genre_ids} */}
								</p>
								<p className="border border-rose-700 rounded-md px-1 text-rose-700 text-sm">
									Drama
								</p>
							</div>
							<div className="w-fit flex pr-3 ">
								<div className="flex items-center mr-2 ">
									<FontAwesomeIcon
										className="text-yellow-400 pr-2"
										icon={faStar}
									/>
									<p className="text-slate-200">
										{RatePercentage(movie.vote_average)}
									</p>
								</div>
								| <p>{formatVoteCount(movie.vote_count)}</p>
							</div>
						</section>

						<section className="flex justify-between flex-col md:flex-row mt-4 w-[90%] h-4/5 text-slate-700 md:w-fit gap-3">
							<div className="w-full h-full md:w-3/5 flex flex-col justify-evenly">
								<p data-testid="movie-overview">
									{movie.overview}
								</p>
								<div>
									<p>Director:&nbsp;</p>
									<p className="text-rose-700"></p>
								</div>
								<div>
									<p>Writers:&nbsp;</p>
									<p className="text-rose-700"></p>
								</div>
								<div>
									<p>Stars:&nbsp;</p>
									<p className="text-rose-700"></p>
								</div>
								<div className="flex justify-between items-centre">
									<div className="bg-rose-700 min-h-[3rem] lg:h-11 rounded-md w-[47%] md:w-[35%] px-2 py-2 text-slate-300 text-center">
										Top rated movie
									</div>
									<div className="text-slate-700 min-h-[3rem] lg:h-11 w-[47%] md:w-[60%] border border-slate-700 rounded-md flex justify-between items-center px-2">
										<p>Awards 9 nominations</p>
										<FontAwesomeIcon icon={faArrowDown} />
									</div>
								</div>
							</div>

							<div className="w-full md:w-[32%] rounded-lg flex gap-3 flex-col ">
								<div className="bg-rose-700 rounded-md h-10 flex justify-center items-center text-slate-200 ">
									<FontAwesomeIcon icon={faCalendar} />
									<p className="pl-3">See Showtimes</p>
								</div>
								<div className="flex h-10 justify-center rounded-md items-center border border-rose-700">
									<FontAwesomeIcon icon={faEllipsisV} />
									<p className="pl-3">More watch options</p>
								</div>
								<div className=" overflow-hidden rounded-md h-1/2 gap-2 flex">
									<img
										src={`${posterBaseUrl}${movie.poster_path}`}
										alt={movie.title}
										className="w-[32%] h-auto object-cover "
									/>
									<img
										src={`${posterBaseUrl}${movie.poster_path}`}
										alt={movie.title}
										className="w-[32%] h-auto object-cover "
									/>
									<img
										src={`${posterBaseUrl}${movie.poster_path}`}
										alt={movie.title}
										className="w-[32%] h-auto object-cover "
									/>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</section>
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
