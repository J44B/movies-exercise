// file to create the journal page
import { createHeader, createFooter } from './index.js';
import { removeFavorite, getFavorites } from './index.js';
import { createJournalCard } from './index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());
// document.body.insertAdjacentElement('beforeend', createFooter());
new init();


function init() {
  const journalContainer = document.getElementById('journal-container');
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
  location.reload();
}
