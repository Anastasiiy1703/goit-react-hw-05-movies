import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HomeCss from "./HomeCss.module.css"

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6'; 
        const timeWindow = 'week'; 
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/${timeWindow}?api_key=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2 className={HomeCss.title}>Trending Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title || movie.name} - {movie.release_date || movie.first_air_date}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
