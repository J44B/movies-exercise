// handler for importing and exporting

// --- Begin import section ---

import { fetchMovies, fetchPopularMovies } from './fetch.js';
import { addFavorite, removeFavorite, getFavorites } from './storage.js';
import { createHeader, createFooter } from './ui.js';
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
};
// export { addFavorite, removeFavorite, getFavorites }
// export { createHeader, createFooter }

// --- Begin export section ---
