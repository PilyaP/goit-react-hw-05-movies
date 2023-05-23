import Loader from 'components/Loader/Loader';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMostPopular } from 'services/api';

const PopularMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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

  const element = movies.map(({ id, title }) => (
    <Link className="" key={id} to={`/movies/${id}`} state={{ from: location }}>
      <li>{title}</li>
    </Link>
  ));

  return <>{loading ? <Loader /> : <ul>{element}</ul>}</>;
};

export default PopularMovie;
