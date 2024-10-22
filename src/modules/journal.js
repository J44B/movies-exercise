// file to create the journal page
import { createHeader, createFooter, searchInJournal } from './index.js';
import { removeFavorite, getFavorites } from './index.js';
import { createJournalCard } from './index.js';

document.body.insertAdjacentElement('afterbegin', createHeader()); 
document.body.insertAdjacentElement('beforeend', createFooter());

init();

function init() {
  const journalContainer = document.getElementById('journal-container');
  journalContainer.innerHTML = '';
  try {
    const movies = getFavorites();

    movies.forEach((movie) => {
      const card = createJournalCard(movie, handleRemoveFromJournal);

      journalContainer.appendChild(card);

    });
  } catch (error) {
    console.error(error);
  }
};

function handleRemoveFromJournal(movie) {
  removeFavorite(movie);

  const journalContainer = document.getElementById('journal-container');

  journalContainer.removeChild(document.getElementById(movie.id.toString()));
}

let timeoutId;
const input = document.getElementById('search')

input.addEventListener('input', (event) => {

  const searchValue = event.target.value;

  if(searchValue === '')
    return init();
  
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    searchMovies(searchValue);
  }, 300); 
});

function searchMovies(queryString){
  const journalContainer = document.getElementById('journal-container');
  journalContainer.innerHTML = '';

  try {
    const movies = searchInJournal(queryString);
    console.log('input event:', movies);

    movies.forEach((movie) => {
      const card = createJournalCard(movie, handleRemoveFromJournal);

      journalContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}
