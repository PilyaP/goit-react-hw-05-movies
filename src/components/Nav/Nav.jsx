import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};

export default Nav;
