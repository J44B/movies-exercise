// main file to execute functions

import {
  fetchMovies,
  fetchPopularMovies,
  createHeader,
  createCard,
  addFavorite
} from './modules/index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());

document.addEventListener('DOMContentLoaded', async () => {
  const movieContainer = document.getElementById('movie-container');
  try {
    const movies = await fetchPopularMovies();
    movies.results.forEach((movie) => {
      const [movieCard, addToJournalBtn] = createCard(movie);

      movieContainer.appendChild(movieCard);

      addToJournalBtn.onclick = () => {
        addFavorite(movie);
      };
    });
  } catch (error) {
    console.error(error);
  }
});

// document.body.insertAdjacentElement('beforeend', createFooter());
