import { Link, useLocation } from 'react-router-dom';

const PopularMovie = ({ items }) => {
  const location = useLocation();

  const element = items.map(({ id, title }) => (
    <Link
      className=''
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li>{title}</li>
    </Link>
  ));

  return <ul>{element}</ul>;
};

export default PopularMovie;
