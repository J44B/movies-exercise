// functions to fetch data

const moviesUrl =
  'https://api.themoviedb.org/3/discover/movie?api_key=b964b6c561a2a384e332abb16d0c63e2';

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
