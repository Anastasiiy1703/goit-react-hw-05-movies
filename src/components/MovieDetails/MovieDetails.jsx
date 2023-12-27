import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom';
import MovieDetailsCss from './MovieDetailsCss.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        );

        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error fetching movie', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    const currentPath = location.pathname;

    // Перевірка, чи поточна сторінка - це сторінка Home або список фільмів на сторінці Home
    const isHomePage = currentPath === '/' || currentPath.startsWith('/movies/');
    if (isHomePage) {
      navigate('/');
      return;
    }

    // Перевірка, чи поточна сторінка - це сторінка фільмів на сторінці Movies
    const isMoviesPage = currentPath.includes('/movies');
    if (isMoviesPage) {
      navigate('/movies');
      return;
    }

    // За замовчуванням, якщо не виконується жодна з умов, повернення на головну сторінку
    navigate('/');
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

  return (
    <div className={MovieDetailsCss.container}>
      <div className={MovieDetailsCss.cont}>
        <div className={MovieDetailsCss.btnImg}>
          <button className={MovieDetailsCss.goBackButton} onClick={handleGoBack}>
            Go back
          </button>
          {movieDetails.poster_path && (
            <img
              className={MovieDetailsCss.img}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
        </div>
        <div className={MovieDetailsCss.details}>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={MovieDetailsCss.additionalInf}>
        <h3 className={MovieDetailsCss.additionalTitle}>Additional Information</h3>
        <ul>
          <li>
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
