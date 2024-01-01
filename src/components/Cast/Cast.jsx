import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastCss from "./CastCss.module.css";
import { fetchCast } from 'Fetches/fetch';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const castData = await fetchCast(movieId); 
      setCast(castData);
    };

    getCast();
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