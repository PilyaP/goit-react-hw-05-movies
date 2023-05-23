import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import PopularMovie from 'components/PopularMovieItem/PopularMovieItem';
import './SearchMovies.css'; 

const SearchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await searchMovies(query);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (query === '') {
      return;
    }
    fetchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.searchname.value });
  };

  return (
    <div className="search-movies">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchname"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {loading ? <Loader /> : <PopularMovie items={movies} />}
    </div>
  );
};

export default SearchMovies;
