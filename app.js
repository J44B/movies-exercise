// main file to execute functions
import { createHeader } from "./modules/ui.js";
import { fetchMovies, fetchPopularMovies } from './modules/index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());
// document.body.insertAdjacentElement('beforeend', createFooter());
fetchMovies(); // fetch for use on manual search
fetchPopularMovies(); // fetch for use to display default cards on homepage
