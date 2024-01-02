import React, { useState, useEffect, useRef } from 'react';
import { useParams,  useLocation, Link } from 'react-router-dom';
import MovieDetailsCss from './MovieDetailsCss.module.css';
import { fetchMovieDetails } from 'Fetches/fetch';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId, setMovieDetails);
  }, [movieId]);

 
    const backLink = useRef(location.state?.from || '/');

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

  return (
    <div className={MovieDetailsCss.container}>
      <div className={MovieDetailsCss.cont}>
        <div className={MovieDetailsCss.btnImg}>
          <Link className={MovieDetailsCss.goBackButton} to={backLink.current}>
            Go back
          </Link>
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
            <Link to={`/movies/${movieId}/cast`} >
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`} >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;