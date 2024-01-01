import React, { useState, useEffect } from 'react';
import HomeCss from "./HomeCss.module.css";
import MoviesList from 'components/Cast/MovieList/MovieList';


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
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
