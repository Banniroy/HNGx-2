import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";
import SearchInput from "./components/SearchInput";

function App() {
	return (
		<main className="App h-full w-full">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/movie/:id" element={<MovieDetails />} />
				<Route exact path="/search" element={<SearchInput />} />
			</Routes>
		</main>
	);
}

export default App;
