import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastCss from "./CastCss.module.css";


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
        
        if (response.ok) {
          const data = await response.json();
          setCast(data.cast);
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

   return (
    <div>
      <h2>Cast</h2>
      <ul className={CastCss.list}>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              className={CastCss.img}
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `https://fastly.picsum.photos/id/593/1774/2365.jpg?hmac=zzvok1xX2Is_tGRfdHUANqWsOIK0T-HVzWPkaMqZInw`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
