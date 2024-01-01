const apiKey = 'c473a8c64320184dea7ebdd3984bb9b6';

export const fetchMovieDetails = async (movieId, setMovieDetails) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );

    if (response.ok) {
      const data = await response.json();
      setMovieDetails(data);
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching movie', error);
  }
};

export const searchMovies = async (searchTerm, setSearchResults, setShowNoResults, setError) => {
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

export const fetchCast = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
    
    if (response.ok) {
      const data = await response.json();
      return data.cast; 
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error fetching cast:', error);
    return []; 
  }
};

export const fetchReviews = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`);
    
    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};
