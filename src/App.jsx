import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import useDebounce from "./hooks/useDebounce";
import "./App.css";

const API_URL =
  "https://6954cf161cd5294d2c7d8aad.mockapi.io/api/v1/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setMovies(response.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [movies, debouncedSearch]);

  if (loading) return <p>Loading movies…</p>;
  if (error) return <p>Failed to load movies</p>;

  return (
    <div className="app">
      <h1 className="head">Movie App with search </h1>

      <input
        type="text"
        placeholder="Search movies by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>
        Showing {filteredMovies.length} of {movies.length} movies
      </p>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;