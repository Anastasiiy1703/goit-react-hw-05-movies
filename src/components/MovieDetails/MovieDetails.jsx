import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import MovieDetailsCss from './MovieDetailsCss.module.css';
import { fetchMovieDetails } from 'Fetches/fetch';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId, setMovieDetails);
  }, [movieId]);

  const handleGoBack = () => {
    const backLink = location.state?.from || '/';
    console.log(location.state?.from);
    navigate(backLink);
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
            <Link to={`/movies/${movieId}/cast`} state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
