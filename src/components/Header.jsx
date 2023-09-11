import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="w-full md:w-full flex flex-row-reverse md:flex-row items-center justify-between h-16 px-4 bg-red-900 text-white sticky md:fixed top-0">
			<div className="md:hidden w-[30%]"></div>
			<div className="w-[40%] md:w-[15%] flex items-center  md:justify-end gap-2 md:gap-4">
				<span className="bg-red-600 rounded-2xl flex justify-center items-center h-12 w-12"></span>
				<span>MovieBox</span>
			</div>
			<div className="w-1/2 h-[60%] hidden md:flex">
				<div className="border rounded-lg px-2 h-full w-full flex justify-between items-center">
					<input
						type="text"
						className="bg-transparent w-4/5 text-white"
						placeholder="What do you want to watch?"
					/>
					{/* fontawesome */}
				</div>
			</div>
			<div className="flex items-center justify-around w-[30%] md:w-[20%] flex-row-reverse md:flex-row">
				<button className="hidden md:block">
					<Link to="/">Sign In</Link>
				</button>
				<div className="relative w-12 h-12 rounded-2xl border flex justify-center bg-red-600 items-center">
					<span className="w-8 h-1 absolute rounded bg-white -translate-y-[6px]"></span>
					<span className="w-8 h-1 absolute rounded bg-white translate-y-[7px]"></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
