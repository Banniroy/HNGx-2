import Header from "./Header";
import Card from "./Card";

const Home = ({ movies, randomMovie }) => {
	return (
		<main>
			<Header />
			<section className="border h-[30rem] bg-red-300">
				{randomMovie && (
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
				)}
			</section>

			<section className="h-full max-w-[99%] flex flex-col justify-center items-center pt-9">
				<div>
					<h1>Top Rated Movies</h1>
				</div>
				<div className=" w-fit h-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-x-16 gap-y-28 ">
					{movies.map((movie) => (
						<Card key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
