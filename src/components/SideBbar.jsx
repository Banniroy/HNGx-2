import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTv,
	faHome,
	faVideoCamera,
	faTelevision,
	faClipboardList,
	faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

const SideBbar = () => {
	return (
		<section className="h-full hidden md:block w-48 border border-slate-900 rounded-r-[4rem] py-12">
			<Link to="/" className="flex items-center justify-evenly">
				<span className=" rounded-full bg-rose-700 flex justify-center items-center text-white h-10 w-10 md:h-12 md:w-12">
					<FontAwesomeIcon icon={faTv} />
				</span>
				<span>MovieBox</span>
			</Link>

			<div className="w-full mt-5 h-[15rem]">
				<Link
					to="/"
					className="flex items-center justify-evenly h-1/4 w-full active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex justify-center items-center h-10 w-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faHome} />
					</span>
					<span>Home</span>
				</Link>
				<Link
					to=""
					className="flex items-center justify-evenly h-1/4 w-full active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex justify-center items-center h-10 w-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faVideoCamera} />
					</span>
					<span className="">Movies</span>
				</Link>
				<Link
					to="/"
					className="flex items-center justify-evenly h-1/4 w-full active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex justify-center items-center h-10 w-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faTelevision} />
					</span>
					<span>TV Series</span>
				</Link>
				<Link
					to="/"
					className="flex items-center justify-evenly h-1/4 w-full active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex justify-center items-center h-10 w-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faClipboardList} />
					</span>
					<span>Upcoming</span>
				</Link>
			</div>

			<div className="w-full flex flex-col justify-centeri items-center mt-3">
				<span className="w-[80%] h-fit border px-3 py-4 border-rose-700 rounded-lg flex flex-col items-center bg-rose-50">
					Play movie quizes and earn free tickets. 50 people are
					playing now
					<b className="px-2 py-2 bg-rose-200 rounded-2xl w-full mt-1 text-rose-700 cursor-pointer">
						Start playing
					</b>
				</span>
				<Link
					to="/"
					className="flex items-center justify-evenly mt-2 h-1/4 w-full active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex justify-center items-center h-10 w-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faPowerOff} />
					</span>
					<span>Logout</span>
				</Link>
			</div>
		</section>
	);
};

export default SideBbar;
