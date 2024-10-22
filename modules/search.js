// import needed functions
import { getFavorites } from './index.js';

// search web

// search journal
function searchInJournal(searchValue) {
  const storedMovies = getFavorites();
  
  // return storedMovies.filter(
  //   object => object.title.toLowerCase().includes(searchValue.toLowerCase())); 

  return storedMovies.filter(function (object) {
    return Object.keys(object).some(function (key) {
      return object[key].toString().toLowerCase().includes(searchValue.toLowerCase())
    });
  });
}

export { searchInJournal };
