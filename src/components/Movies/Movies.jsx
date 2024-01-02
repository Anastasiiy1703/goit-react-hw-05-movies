import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesCss from './MoviesCss.module.css';
import MoviesList from 'components/Cast/MovieList/MovieList';
import { searchMovies } from 'Fetches/fetch';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initialSearchTerm = searchParams.get('query');
    const storedSearchTerm = localStorage.getItem('searchTerm');
    
    if (initialSearchTerm) {
      setSearchTerm(initialSearchTerm);
      searchMovies(initialSearchTerm, setSearchResults, setShowNoResults, setError);
    } else if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
      searchMovies(storedSearchTerm, setSearchResults, setShowNoResults, setError);
    }
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const newSearchTerm = searchTerm.trim();

    const params = new URLSearchParams(window.location.search);
    params.set('query', newSearchTerm);

    setSearchParams(params);
    setSearchTerm(newSearchTerm);
    localStorage.setItem('searchTerm', newSearchTerm);

    searchMovies(newSearchTerm, setSearchResults, setShowNoResults, setError);
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
