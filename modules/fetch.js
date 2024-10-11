// functions to fetch data

// function to fetch data for manual search

let query = '';
const moviesUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=b964b6c561a2a384e332abb16d0c63e2`;

async function fetchMovies() {
  try {
    const response = await fetch(moviesUrl);

    if (!response.ok) throw new Error('Movie request failed');

    const fetchedMovies = await response.json();

    return fetchedMovies;
  } catch (error) {
    console.error(error);
  }
}

// function to fetch data for displaying default cards on homepage

const popularMoviesUrl =
  'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=b964b6c561a2a384e332abb16d0c63e2';

async function fetchPopularMovies() {
  try {
    const response = await fetch(popularMoviesUrl);

    if (!response.ok) throw new Error('Movie request failed');

    const fetchedPopularMovies = await response.json();

    return fetchedPopularMovies;
  } catch (error) {
    console.error(error);
  }
}

export { fetchMovies, fetchPopularMovies };
