// import needed functions
import { getFavorites } from './index.js';

// search web

// search journal

const storedMovies = getFavorites();

function searchInJournal(searchValue) {
  return storedMovies.filter(function (object) {
    return Object.keys(obj).some(function (key) {
      return object[key].includes(searchValue);
    });
  });
}

export { searchInJournal };
