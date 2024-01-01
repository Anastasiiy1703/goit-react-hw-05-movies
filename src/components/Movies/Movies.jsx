import React, { useState } from 'react';
import MoviesCss from './MoviesCss.module.css';
import MoviesList from 'components/Cast/MovieList/MovieList';
import { searchMovies } from 'Fetches/fetch';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    searchMovies(searchTerm, setSearchResults, setShowNoResults, setError); 
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className={MoviesCss.container}>
        <form className={MoviesCss.SearchForm} onSubmit={handleSearch}>
          <input
            className={MoviesCss.SearchFormInput}
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for a movie"
          />
          <button className={MoviesCss.SearchFormButton} type="submit">
            <span className={MoviesCss.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </div>

      {error && <p>{error}</p>}

      <div>
        {showNoResults && <p>No results found</p>}
        {searchResults.length > 0 && <MoviesList movies={searchResults} />} 
      </div>
    </div>
  );
};

export default Movies;
