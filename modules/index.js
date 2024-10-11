// handler for importing and exporting

// --- Begin import section ---

import { fetchMovies, fetchPopularMovies } from './fetch.js';
import { addFavorite, removeFavorite, getFavorites } from './storage.js';
import { createHeader, createFooter, createCard } from './ui.js';
// --- End import section ---

// --- Begin export section ---

export {
  fetchMovies,
  fetchPopularMovies,
  addFavorite,
  removeFavorite,
  getFavorites,
  createHeader,
  createFooter,
  createCard,
};
// export { addFavorite, removeFavorite, getFavorites }
// export { createHeader, createFooter }

// --- Begin export section ---
