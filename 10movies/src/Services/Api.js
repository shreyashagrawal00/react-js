const API_KEY = "d2992627a42e71ee6bc490e871834cfa";
const BASE_URL = "https://api.themoviedb.org/3";

// Fallback movie data in case API fails
const FALLBACK_MOVIES = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    release_date: "1994-09-22",
    vote_average: 9.3,
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    release_date: "1972-03-14",
    vote_average: 9.2,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    release_date: "1994-10-14",
    vote_average: 8.9,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
    id: 5,
    title: "Fight Club",
    release_date: "1999-10-15",
    vote_average: 8.8,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
  },
  {
    id: 6,
    title: "Forrest Gump",
    release_date: "1994-07-06",
    vote_average: 8.8,
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
  }
];

// Helper function to check if response is ok
const checkResponse = (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("API key is invalid or expired. Please check your TMDB API key.");
      } else if (response.status === 429) {
        throw new Error("API rate limit exceeded. Please try again later.");
      } else {
        throw new Error(`Failed to fetch popular movies. Status: ${response.status}`);
      }
    }
    
    const data = await response.json();
    
    if (!data.results) {
      throw new Error("Invalid response format from API");
    }
    
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    
    // Return fallback data if API fails
    if (error.message.includes("API key") || error.message.includes("Failed to fetch")) {
      console.log("Using fallback movie data");
      return FALLBACK_MOVIES;
    }
    
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("API key is invalid or expired. Please check your TMDB API key.");
      } else if (response.status === 429) {
        throw new Error("API rate limit exceeded. Please try again later.");
      } else {
        throw new Error(`Failed to search movies. Status: ${response.status}`);
      }
    }
    
    const data = await response.json();
    
    if (!data.results) {
      throw new Error("Invalid response format from API");
    }
    
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    
    // Return filtered fallback data for search
    if (error.message.includes("API key") || error.message.includes("Failed to fetch")) {
      console.log("Using fallback movie data for search");
      const filteredMovies = FALLBACK_MOVIES.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      return filteredMovies;
    }
    
    throw error;
  }
};