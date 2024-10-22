// main file to execute functions

import {
  fetchMovies,
  fetchPopularMovies,
  createHeader,
  createFooter,
  createCard,
  addFavorite,
  lupe,
} from './modules/index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());
document.body.insertAdjacentElement('beforeend', createFooter());

document.addEventListener('DOMContentLoaded', async () => {
  const movieContainer = document.getElementById('movie-container');
  try {
    const movies = await fetchPopularMovies();

    movies.results.forEach((movie) => {
      const card = createCard(movie, handleAddToJournal);

      movieContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});

function handleAddToJournal(movie) {
  addFavorite(movie);
}