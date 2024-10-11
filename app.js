// main file to execute functions

import {
  fetchMovies,
  fetchPopularMovies,
  createHeader,
  createCard,
} from './modules/index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());
// document.body.insertAdjacentElement('beforeend', createFooter());

const movies = await fetchPopularMovies(); // fetch for use to display default cards on homepage
console.log(movies);
await fetchMovies(); // fetch for use on manual search
