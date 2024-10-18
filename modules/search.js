// import needed functions
import { getFavorites } from './index.js';

// search web

// search journal

const storedMovies = getFavorites();

function searchInJournal(searchValue) {
  return storedMovies.filter(function (object) {
    return Object.keys(object).some(function (key) {
      return object[key].includes(searchValue);
    });
  });
}

export { searchInJournal };
