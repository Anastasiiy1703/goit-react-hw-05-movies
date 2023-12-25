import { NavLink } from 'react-router-dom';
import HeaderCss from './HeaderCss.module.css';

const Header = () => {
  return (
    <nav className={HeaderCss.navigation}>
      <ul className={HeaderCss.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
