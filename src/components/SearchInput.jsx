import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({
	query,
	setQuery,
	loading,
	searchResults,
	posterBaseUrl,
	handleSearchSubmit,
}) => {
	// Define the query state here

	const renderSearchResults = () => {
		if (loading) {
			return <p>Loading...</p>;
		}

		if (searchResults && searchResults.length > 0) {
			return (
				<ul>
					{searchResults.map((movie) => (
						<li key={movie.id}>
							<img
								src={`${posterBaseUrl}${movie.poster_path}`}
								alt={movie.title}
								data-testid="movie-poster"
								className="h-auto max-w-xs pb-3"
							/>
							<h3>{movie.title}</h3>
							<p>Release Date: {movie.release_date}</p>
						</li>
					))}
				</ul>
			);
		}

		// If there are no search results
		return null;
	};

	return (
		<>
			<form
				onSubmit={handleSearchSubmit}
				className="border rounded-lg pr-2 h-full w-full flex justify-between items-center"
			>
				<input
					type="text"
					className="bg-transparent px-3 py-[2px] w-4/5 h-[80%] text-white"
					placeholder="What do you want to watch?"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Link>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Link>
			</form>

			{renderSearchResults()}
		</>
	);
};

export default SearchInput;
