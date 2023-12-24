import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6';

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
        setShowNoResults(data.results.length === 0);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setError('Error fetching search results');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a movie" />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      <div>
        {showNoResults && <p>No results found</p>}
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link> 
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movies;
