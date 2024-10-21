// handler for importing and exporting

// --- Begin import section ---

export { fetchMovies, fetchPopularMovies } from './fetch.js';
export { addFavorite, removeFavorite, getFavorites } from './storage.js';
export {
  createHeader,
  createFooter,
  createCard,
  createJournalCard,
  lupe,
} from './ui.js';
export { searchInJournal } from './search.js';