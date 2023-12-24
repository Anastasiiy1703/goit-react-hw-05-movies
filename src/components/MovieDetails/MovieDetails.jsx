import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`);
        
        if (response.ok) {
          const data = await response.json();
          setMovieDetails(data);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const genres = movieDetails.genres.map((genre) => genre.name).join(', ');

  return (
    <div>
       <h2>{movieDetails.title}</h2>
      {movieDetails.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
      )}
      <p>User Score: {movieDetails.vote_average}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
