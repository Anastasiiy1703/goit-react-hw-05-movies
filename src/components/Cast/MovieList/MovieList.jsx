import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
                <Link
                    to={`/movies/${movie.id}`}
                    state={{ from: location.pathname }}
            >
              {movie.title || movie.name} - {movie.release_date || movie.first_air_date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
