import { useState, useEffect } from 'react';

import { getMostPopular } from 'services/api';
import Loader from 'components/Loader/Loader';
import PopularMovieItem from '../PopularMovieItem/PopularMovieItem';

const PopularMovies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await getMostPopular();
        setMovies([...data.results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  return <>{loading ? <Loader /> : <PopularMovieItem items={movies} />}</>;
};

export default PopularMovies;
