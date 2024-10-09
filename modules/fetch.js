// functions to fetch data
let query = '';
const moviesUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=b964b6c561a2a384e332abb16d0c63e2`;

export async function fetchMovies() {
  try {
    const response = await fetch(moviesUrl);

    if (!response.ok) throw new Error('Movie request failed');

    const fetchedMovies = await response.json();

    return fetchedMovies;
  } catch (error) {
    console.error(error);
  }
}
