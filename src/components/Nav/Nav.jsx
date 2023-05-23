import { NavLink } from 'react-router-dom';
import './Nav.css';
const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav-link">
        Movies
      </NavLink>
    </nav>
  );
};

export default Nav;
