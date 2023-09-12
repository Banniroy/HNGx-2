import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../context/DataContext";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const { movies, posterBaseUrl } = useContext(DataContext);
	return (
		<main>
			<Header />
			<section className="border h-[30rem] bg-red-300">
				{/* {randomMovie && (
					<div className="h-[30rem] w-full bg-red-600 overflow-y-hidden">
						<img
							src={`${posterBaseUrl}${randomMovie.poster_path}`}
							alt={randomMovie.title}
							data-testid="randomMovie-poster"
							className="h-auto w-full"
						/>
						<div className="absolute top-20">
							<p>Title: {randomMovie.title}</p>
							<p>Overview: {randomMovie.overview}</p>
						</div>
					</div>
				)} */}
			</section>

			<section className="h-full max-w-[99%] flex flex-col justify-center items-center pt-9">
				<div className="flex justify-between items-center w-[95%] my-8 mb-14">
					<h1 className="font-extrabold text-2xl">
						Top 10 rated Movies
					</h1>
					<Link className="text-pink-600 font-bold">
						See more &nbsp;
						<FontAwesomeIcon icon={faGreaterThan} />
					</Link>
				</div>
				<div className="flex justify-center">
					<div className="grid w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
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
