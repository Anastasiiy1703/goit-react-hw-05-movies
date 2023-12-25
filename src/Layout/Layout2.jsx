import { Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const Layout2 = () => {
  return (
    <div>
      <MovieDetails />
      <Outlet />
    </div>
  );
};

export default Layout2