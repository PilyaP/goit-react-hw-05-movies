import Loader from 'components/Loader/Loader';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/api';
import './MovieDetails.css';


const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(id);
        setMovie(data);
        setGenres(data.genres);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieId();
  }, [id]);

  const goBack = useCallback(() => {
    navigate(from);
  }, [navigate, from]);

  return (
    <div className="movie-details-container">
      <button className='btn-movie' onClick={goBack}>GO BACK</button>
      {loading && <Loader />}
      <div className="movie-details">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="movie-poster"
            alt=""
          />
        )}
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="user-score">
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <h2 className="overview-title">Overview</h2>
          <p className="overview-text">{movie.overview}</p>
          <h3 className="genres-title">Genres</h3>
          <ul className="genres-list">
            {genres.map(({ id, name }) => (
              <li key={id} className="genre-item">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navigation-links">
        <NavLink className="nav-link" to="cast" state={{ from }}>
          Cast
        </NavLink>
        <NavLink className="nav-link" to="reviews" state={{ from }}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
