import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTv } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	return (
		<header className="w-full md:w-full flex flex-row-reverse md:flex-row items-center justify-between h-16 px-4 bg-red-900 text-white sticky md:fixed top-0">
			<div className="md:hidden w-[10%]">
				<Link to="/search" className="text-2xl">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Link>
			</div>
			<Link
				to="/"
				className="w-[40%] md:w-[15%] flex items-center  md:justify-end gap-2 md:gap-4"
			>
				<span className=" rounded-full bg-rose-700 flex justify-center items-center text-white h-10 w-10 md:h-12 md:w-12">
					<FontAwesomeIcon icon={faTv} />
				</span>
				<span>MovieBox</span>
			</Link>
			<div className="w-1/2 h-[100%] hidden md:flex md:justify-center">
				<input
					type="text"
					className="bg-transparent outline-none px-3 py-[2px] w-4/5 h-full text-black"
					placeholder="What do you want to watch?"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onFocus={() => {
						navigate("/search");
					}}
				/>
				<Link
					className="h-full w-[20%]"
					onClick={(e) => {
						e.preventDefault();
						searchMovies(query);
					}}
				>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Link>
			</div>
			<div className="flex items-center justify-end md:justify-around w-[30%] md:w-[20%] flex-row-reverse md:flex-row">
				<button className="hidden md:block">
					<Link to="/">Sign In</Link>
				</button>
				<Link className="relative w-10 h-10 rounded-2xl border flex justify-center bg-rose-700  items-center">
					<span className="w-[18px] h-[2px] absolute rounded bg-white -translate-y-[5px]"></span>
					<span className="w-[18px] h-[2px] absolute rounded bg-white translate-y-[5px]"></span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
