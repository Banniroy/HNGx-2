import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchApi } from "../../api/axios";
import DataContext from "../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading-state/Loading";

const SearchInput = () => {
  const { apiKey, posterBaseUrl } = useContext(DataContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await SearchApi.get(
        `/search/movie?api_key=${apiKey}&query=${query}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="h-screen w-full flex items-center flex-col">
      <div className="flex flex-col w-4/5 min-h-full mb-8">
        <div className="border h-20 mb-7 rounded-md flex items-center">
          <input
            type="text"
            className="bg-transparent outline-none px-3 py-2 w-4/5 h-full text-black"
            placeholder="What do you want to watch?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              navigate("/search");
            }}
          />
          <button
            className="h-full w-1/5 flex items-center justify-center bg-blue-500 text-white"
            onClick={(e) => {
              e.preventDefault();
              searchMovies(query);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="border min-h-full w-full rounded-lg flex flex-col items-center">
          {loading && <Loading />}

          <div className="w-full flex flex-wrap gap-4 mt-4 justify-center">
            {results.map((movie) => (
              <div
                key={movie.id}
                className="border text-black flex flex-col w-1/4 flex-wrap p-4"
              >
                {movie.poster_path ? (
                  <img
                    src={`${posterBaseUrl}${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    className="w-32 h-auto object-cover"
                  />
                ) : (
                  <div className="w-32 h-48 bg-gray-300 text-black">
                    No Poster Available
                  </div>
                )}
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-500">{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
