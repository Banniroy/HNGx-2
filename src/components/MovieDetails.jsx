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
	const {
		apiKey,
		posterBaseUrl,
		director,
		writers,
		stars,
		fetchMovieDetails,
	} = useContext(DataContext);

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
		fetchMovieDetails(id);
	}, [id]);

	if (!movie) {
		return (
			<div className="flex items-center justify-center w-full h-full ">
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

	const formatMinutesToHoursAndMinutes = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;
		return `${hours} hrs ${remainingMinutes} mins`;
	};

	return (
		<section className="flex justify-center w-full m-h-screen md:h-screen">
			<div className="w-[90%] md:w-full h-full flex flex-row gap-10">
				<SideBbar />

				<section className="md:ml-[14rem] w-full md:w-[80%] flex flex-col justify-evenly items-center py-4">
					<div className="border border-red-900 rounded-2xl w-full h-[47%] overflow-y-hidden relative">
						<img
							src={`${posterBaseUrl}${movie.poster_path}`}
							alt={movie.title}
							className="object-contain w-full h-auto"
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
									{movie.release_date.slice(0, 4)}
								</p>
								<p data-testid="movie-runtime">
									{movie.runtime}
								</p>
								<p className="px-1 text-sm border rounded-md border-rose-700 text-rose-700">
									Actions
									{/* {movie.genre_ids} */}
								</p>
								<p className="px-1 text-sm border rounded-md border-rose-700 text-rose-700">
									Drama
								</p>
							</div>
							<div className="flex pr-3 w-fit ">
								<div className="flex items-center mr-2 ">
									<FontAwesomeIcon
										className="pr-2 text-yellow-400"
										icon={faStar}
									/>
									<p className="text-slate-200">
										{RatePercentage(movie.vote_average)}
									</p>
								</div>
								| <p>{formatVoteCount(movie.vote_count)}</p>
							</div>
						</section>

						<section className="flex justify-between flex-col md:flex-row mt-4 w-[90%] h-fit text-slate-700 md:w-fit gap-3 pb-4">
							<div className="flex flex-col w-full h-full gap-4 md:w-3/5 justify-evenly">
								<p data-testid="movie-overview">
									{movie.overview}
								</p>
								<div className="flex items-start">
									<p>Director:&nbsp;</p>
									<p className="text-rose-700">{director}</p>
								</div>
								<div className="flex items-start">
									<p>Writers:&nbsp;</p>
									<p className="text-rose-700">{writers}</p>
								</div>
								<div className="flex items-start">
									<p>Stars:&nbsp;</p>
									<p className="text-rose-700">{stars}</p>
								</div>
								<div className="flex justify-between items-centre">
									<div className="bg-rose-700 min-h-[3rem] lg:h-11 rounded-md w-[47%] md:w-[35%] px-2 py-2 text-slate-300 grid place-content-center">
										Top rated movie
									</div>
									<div className="text-slate-700 min-h-[3rem] lg:h-11 w-[47%] md:w-[60%] border border-slate-700 rounded-md flex justify-between items-center px-2">
										<p>Awards 9 nominations</p>
										<FontAwesomeIcon icon={faArrowDown} />
									</div>
								</div>
							</div>

							<div className="w-full md:w-[32%] rounded-lg flex gap-3 flex-col ">
								<div className="flex items-center justify-center h-10 rounded-md bg-rose-700 text-slate-200 ">
									<FontAwesomeIcon icon={faCalendar} />
									<p className="pl-3">See Showtimes</p>
								</div>
								<div className="flex items-center justify-center h-10 border rounded-md border-rose-700">
									<FontAwesomeIcon icon={faEllipsisV} />
									<p className="pl-3">More watch options</p>
								</div>
								<div className="flex gap-2 overflow-hidden rounded-md h-1/2">
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
