import React from 'react'
import { useState , useEffect} from 'react';
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../Services/Api";
import MoviesCard from '../components/MoviesCard';

function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [usingFallback, setUsingFallback] = useState(false);

  const loadPopularMovies = async () => {
    try {
      setError(null);
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      
      // Check if we're using fallback data
      if (popularMovies.length === 6 && popularMovies[0].title === "The Shawshank Redemption") {
        setUsingFallback(true);
      } else {
        setUsingFallback(false);
      }
    } catch (err) {
      console.log(err);
      setError(err.message || "Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    setError(null)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
    } catch (err) {
        console.log(err)
        setError(err.message || "Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setError(null);
    // Reload popular movies
    setLoading(true);
    loadPopularMovies();
  };

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    setError(null);
    setLoading(true);
    loadPopularMovies();
  };

  // Show helpful error message for API key issues
  const getErrorMessage = () => {
    if (error?.includes("API key")) {
      return (
        <div className="error api-key-error">
          <h3>🔑 API Key Issue</h3>
          <p>{error}</p>
          <div className="api-help">
            <p><strong>To fix this:</strong></p>
            <ol>
              <li>Go to <a href="https://www.themoviedb.org/settings/api" target="_blank" rel="noopener noreferrer">TMDB API Settings</a></li>
              <li>Generate a new API key</li>
              <li>Update the API_KEY in src/Services/Api.js</li>
            </ol>
          </div>
          <button onClick={handleRetry} className="retry-button">
            Try Again
          </button>
        </div>
      );
    }
    
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={handleRetry} className="retry-button">
          Try Again
        </button>
      </div>
    );
  };

  return (
    <div className='home'>
        {/* API Status Banner */}
        {usingFallback && (
          <div className="api-status-banner">
            <div className="banner-content">
              <span className="banner-icon">⚠️</span>
              <div className="banner-text">
                <strong>Demo Mode</strong>
                <p>Currently showing sample movies. To see real-time data, please update your TMDB API key.</p>
              </div>
              <a 
                href="https://www.themoviedb.org/settings/api" 
                target="_blank" 
                rel="noopener noreferrer"
                className="banner-button"
              >
                Get API Key
              </a>
            </div>
          </div>
        )}

        <form onSubmit={handleSearch} className='search-form'>
            <input
            type='text'
            placeholder='Search for your favorite movies...'
            className='search-input'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type='submit' className='search-button' disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
            {searchQuery && (
              <button 
                type='button' 
                className='clear-button' 
                onClick={handleClearSearch}
                disabled={loading}
              >
                Clear
              </button>
            )}
        </form>

        {error && getErrorMessage()}

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading amazing movies for you...</p>
          </div>
        ) : (
          <div className="movies-grid">
            {movies.length > 0 ? (
              movies.map((movie) => <MoviesCard movie={movie} key={movie.id}/>)
            ) : !error && searchQuery && (
              <div className="no-results">
                <h3>No movies found</h3>
                <p>Try searching with different keywords or browse our popular movies.</p>
                <button onClick={handleClearSearch} className="browse-button">
                  Browse Popular Movies
                </button>
              </div>
            )}
          </div>
        )}
      
    </div>
  )
}

export default Home
