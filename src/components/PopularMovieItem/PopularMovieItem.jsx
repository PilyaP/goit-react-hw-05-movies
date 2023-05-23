import { Link, useLocation } from 'react-router-dom';
import './PopularMovieItem.css';
const PopularMovieItem = ({ items }) => {
  const location = useLocation();

  const element = items.map(({ id, title }) => (
    <Link
      className="popular-movie-link"
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className="popular-movie-item">{title}</li>
    </Link>
  ));

  return <ul className="popular-movie-list">{element}</ul>;
};

export default PopularMovieItem;
