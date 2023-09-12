
    </section>
  );
};

export default SearchInput;
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
    <section className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <input
            className="border rounded py-2 px-4 w-3/4"
            type="text"
            placeholder="What do you want to watch?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              navigate("/search");
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-4"
            onClick={(e) => {
              e.preventDefault();
              searchMovies(query);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="mt-4">
          {loading && <Loading />}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((movie) => (
              <div
                key={movie.id}
                className="bg-white p-4 border rounded shadow-md"
              >
                {movie.poster_path ? (
                  <img
                    src={`${posterBaseUrl}${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                    className="w-full h-auto"
                  />
                ) : (
                  <div>No Poster Available</div>
                )}
                <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
                <p className="text-gray-600">{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchInput;
