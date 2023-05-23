import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { searchMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import PopularMovie from 'components/PopularMovieItem/PopularMovieItem';

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
    <SearchMoviesContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchname"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {loading ? <Loader /> : <PopularMovie items={movies} />}
    </SearchMoviesContainer>
  );
};

export default SearchMovies;
