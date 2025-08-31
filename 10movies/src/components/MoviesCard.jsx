import React from 'react'
import "../css/MovieCard.css"
import { useMovieContext } from "../Contexts/MovieContexts"

function MoviesCard({movie}) {

    const {isFavorite,addToFavorites,removeFromFavorites}=useMovieContext();
    const favorite=isFavorite(movie.id);
    const onFavoriteClick=(e)=>{
        e.preventDefault();
        if(favorite){
            removeFromFavorites(movie.id)
        }
        else {
            addToFavorites(movie)
        }

    }

    // Format rating to one decimal place
    const formatRating = (rating) => {
        return rating ? rating.toFixed(1) : 'N/A';
    };

    // Get rating color based on score
    const getRatingColor = (rating) => {
        if (!rating) return 'rgba(128, 128, 128, 0.8)';
        if (rating >= 8) return 'rgba(76, 175, 80, 0.9)'; // Green for high ratings
        if (rating >= 6) return 'rgba(255, 193, 7, 0.9)'; // Yellow for medium ratings
        return 'rgba(244, 67, 54, 0.9)'; // Red for low ratings
    };

   return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            
            {/* Movie Rating Badge */}
            {movie.vote_average && (
                <div 
                    className="movie-rating" 
                    style={{ background: getRatingColor(movie.vote_average) }}
                >
                    ⭐ {formatRating(movie.vote_average)}
                </div>
            )}
            
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    {favorite ? '♥' : '♡'}
                </button>
                
                {/* Movie Info in Overlay */}
                <div className="overlay-info">
                    <h4>{movie.title}</h4>
                    <p className="overlay-year">{movie.release_date?.split("-")[0] || 'N/A'}</p>
                    {movie.vote_average && (
                        <p className="overlay-rating">Rating: {formatRating(movie.vote_average)}/10</p>
                    )}
                </div>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p className="movie-year">{movie.release_date?.split("-")[0] || 'N/A'}</p>
            {movie.vote_average && (
                <p className="movie-rating-text">Rating: {formatRating(movie.vote_average)}/10</p>
            )}
        </div>
    </div>
}

export default MoviesCard;

