import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import wallpaper from "../img/wallpaperflare.jpg";
import DataContext from "../context/DataContext";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const { movies, posterBaseUrl } = useContext(DataContext);
	return (
		<main className="h-full w-full relative">
			<Header />
			<div className="h-[40rem] relative w-full overflow-y-hidden">
				<img
					src={wallpaper}
					alt="Wallpaper"
					data-testid="randomMovie-poster"
					className="h-auto w-full"
				/>
				<div className="h-full absolute top-0 opacity-30 w-full bg-black"></div>
				<div className="absolute top-40 left-20 w-[35%] h-fit p-4 flex flex-col gap-4">
					<h1 className="lg:text-6xl text-slate-50">Interstellar:</h1>
					<div className="flex items-center justify-between w-[70%]">
						<div className=" text-black w-fit">
							<b className="bg-yellow-500 font-bold px-2 py-1 rounded-sm shadow-sm w-fit mr-5">
								IMDb
							</b>
							<span className="text-white ">84.00/100</span>
						</div>
						<p className="text-white text-lg">&#127813; 85%</p>
					</div>
					<p className="text-white text-xl">
						In the continuing saga of the Corleone crime family, a
						young Vito Corleone grows up in Sicily and in 1910s New
						York. In the 1950s, Michael Corleone attempts to expand
						the family business into Las Vegas, Hollywood and Cuba.
					</p>
					<div className="bg-rose-700 w-[45%] h-12 flex justify-evenly items-center rounded-md text-white cursor-pointer hover:bg-rose-800">
						<FontAwesomeIcon
							className="text-2xl"
							icon={faPlayCircle}
						/>
						<p>WATCH TRAILER</p>
					</div>
				</div>
			</div>

			<section className="h-fit max-w-[99%] flex flex-col justify-center items-center pt-9">
				<div className="flex justify-center md:justify-between items-center w-[95%] my-8 mb-14">
					<h1 className="font-extrabold text-rose-700 text-2xl">
						Top 10 rated Movies
					</h1>
					<Link className="text-pink-600 hidden md:flex font-bold items-center">
						See more &nbsp;
						<FontAwesomeIcon icon={faGreaterThan} />
					</Link>
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-[90%]">
						{movies.slice(0, 10).map((movie) => (
							<Card
								key={movie.id}
								movie={movie}
								posterBaseUrl={posterBaseUrl}
							/>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Home;
