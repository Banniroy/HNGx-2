import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import wallpaper from "../img/wallpaperflare.jpg";
import wallpaperfla from "../img/wallpaperfla.jpg";
import wallpaperf from "../img/wallpaperf.jpg";
import DataContext from "../context/DataContext";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const { movies, posterBaseUrl } = useContext(DataContext);
	return (
		<main className="h-full w-full relative">
			<Header />
			<div className=" h-fit md:h-[32rem] relative w-full bg-red-300 overflow-y-hidden">
				{/* SM */}
				<img
					src={wallpaperf}
					alt="Wallpaper"
					data-testid="randomMovie-poster"
					className="h-auto w-full md:hidden "
				/>
				{/* MD */}
				<img
					src={wallpaperfla}
					alt="Wallpaper"
					data-testid="randomMovie-poster"
					className="h-auto w-full hidden md:block lg:hidden"
				/>
				{/* LG */}
				<img
					src={wallpaper}
					alt="Wallpaper"
					data-testid="randomMovie-poster"
					className="h-auto w-full hidden lg:block"
				/>
				<div className="h-full absolute top-0 opacity-30 w-full bg-black"></div>

				<div className="absolute top-10 left-5 w-[90%] sm:w-[80%] md:top-[5rem] md:left-20 md:w-[70%] h-fit p-4 flex flex-col gap-4 ">
					{/* SM */}
					<h1 className="text-2xl lg:text-6xl text-slate-50 md:hidden">
						Avatar
					</h1>

					{/* MD */}
					<h1 className="text-2xl lg:text-6xl text-slate-50 hidden md:block md:text-4xl  lg:hidden">
						Dune:
					</h1>

					{/* LG */}
					<h1 className="text-2xl lg:text-6xl text-slate-50 hidden lg:block">
						Interstellar:
					</h1>

					<div className="flex items-center justify-between w-[60%] md:w-[70%]">
						<div className=" text-black w-fit">
							<b className="bg-yellow-500 font-bold py-[2px] px-2 md:py-2 md:px-3 rounded-sm shadow-sm w-fit mr-5">
								IMDb
							</b>
							<span className="text-white ">84.00/100</span>
						</div>
						<p className="text-white text-lg">&#127813; 85%</p>
					</div>
					<p className="text-white hidden sm:block sm:text-xl md:text-2xl">
						In the continuing saga of the Corleone crime family, a
						young Vito Corleone grows up in Sicily and in 1910s New
						York. In the 1950s, Michael Corleone attempts to expand
						the family business into Las Vegas, Hollywood and Cuba.
					</p>
					<div className="bg-rose-700 w-fit py-[2px] sm:py-2 sm:px-3 md:w-[45%] md:h-12 md:py-1 px-2 flex justify-evenly items-center rounded-md text-white gap-3 cursor-pointer hover:bg-rose-800">
						<FontAwesomeIcon
							className="md:text-2xl"
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
