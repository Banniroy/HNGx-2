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
		<section className="h-full hidden md:block w-48 border border-slate-900 rounded-r-[4rem] py-12 fixed left-0 ">
			<Link to="/" className="flex items-center justify-evenly">
				<span className="flex items-center justify-center w-10 h-10 text-white rounded-full  bg-rose-700 md:h-12 md:w-12">
					<FontAwesomeIcon icon={faTv} />
				</span>
				<span>MovieBox</span>
			</Link>

			<div className="w-full mt-5 h-[15rem]">
				<Link
					to="/"
					className="flex items-center w-full justify-evenly h-1/4 active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex items-center justify-center w-10 h-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faHome} />
					</span>
					<span>Home</span>
				</Link>
				<Link
					to=""
					className="flex items-center w-full border-r-4 justify-evenly h-1/4 bg-rose-100 border-r-rose-700"
				>
					<span className="flex items-center justify-center w-10 h-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faVideoCamera} />
					</span>
					<span className="">Movies</span>
				</Link>
				<Link
					to="/"
					className="flex items-center w-full justify-evenly h-1/4 active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex items-center justify-center w-10 h-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faTelevision} />
					</span>
					<span>TV Series</span>
				</Link>
				<Link
					to="/"
					className="flex items-center w-full justify-evenly h-1/4 active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex items-center justify-center w-10 h-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faClipboardList} />
					</span>
					<span>Upcoming</span>
				</Link>
			</div>

			<div className="flex flex-col items-center w-full mt-3 justify-centeri">
				<span className="w-[80%] h-fit border px-3 py-4 border-rose-700 rounded-lg flex flex-col items-center bg-rose-50">
					Play movie quizes and earn free tickets. 50 people are
					playing now
					<b className="w-full px-2 py-2 mt-1 cursor-pointer bg-rose-200 rounded-2xl text-rose-700">
						Start playing
					</b>
				</span>
				<Link
					to="/"
					className="flex items-center w-full mt-2 justify-evenly h-1/4 active:bg-rose-100 focus-within:bg-rose-100 focus-within:border-r-4 focus-within:border-r-rose-700 hover:bg-rose-100 hover:border-r-rose-700 hover:border-r-4"
				>
					<span className="flex items-center justify-center w-10 h-10 md:h-12 md:w-12">
						<FontAwesomeIcon icon={faPowerOff} />
					</span>
					<span>Logout</span>
				</Link>
			</div>
		</section>
	);
};

export default SideBbar;
