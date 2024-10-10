// file to create the journal page
import { createHeader, createFooter } from './index.js';
import { addFavorite, removeFavorite, getFavorites } from './index.js';

document.body.insertAdjacentElement('afterbegin', createHeader());
//document.body.insertAdjacentElement('beforeend', createFooter());

const item = {
  adult: false,
  backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
  genre_ids: [28, 35, 878],
  id: 533535,
  original_language: 'en',
  original_title: 'Deadpool \u0026 Wolverine',
  overview:
    'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
  popularity: 3546.58,
  poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
  release_date: '2024-07-24',
  title: 'Deadpool \u0026 Wolverine',
  video: false,
  vote_average: 7.736,
  vote_count: 4147,
};

const f = getFavorites();
removeFavorite(item); // oder ID ???
addFavorite(item);
