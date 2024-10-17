function createCard(data, buttonHandler) {
  const button = createAddFavoriteButton();
  const card = createCardComponent(data, button);

  button.onclick = () => buttonHandler(data);

  return card;
}

function createJournalCard(data, buttonHandler) {
  const button = createRemoveFavoriteButton();
  const card = createCardComponent(data, button);
  card.classList.add(
    'journal-card',
    'flex',
    'flex-col',
    'bg-slate-800',
    'h-40',
    'w-2/3',
    'border-solid',
    'border-1',
    'border-slate-400'
  );

  button.onclick = () => buttonHandler(data);

  return card;
}

// private function
function createCardComponent(data, button) {
  const card = document.createElement('div');

  card.classList.add(
    'flex',
    'flex-col',
    'bg-slate-800',
    'shadow-lg',
    'h-64',
    'w-40',
    'border-solid',
    'border-1',
    'border-slate-800',
    'text-sm',
    'rounded-t',
    'm-2'
  );
  const movieImage = document.createElement('img');
  movieImage.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
  movieImage.classList.add(
    'h-2/3',
    'w-full',
    'object-contain',
    'shadow-lg',
    'shadow-slate-400'
  );

  const movieTitle = document.createElement('p');
  movieTitle.textContent = data.title;
  movieTitle.classList.add(
    'truncate',
    'text-white',
    'font-bold',
    'p-2',
    'mt-2',
    'font-thin'
  );
  const movieGenre = document.createElement('p');
  movieGenre.textContent = data.genres;
  movieGenre.classList.add('text-white', 'p-2', 'mt-2');

  const movieRelease = document.createElement('p');
  movieRelease.textContent = data.release_date;
  movieRelease.classList.add('text-white', 'p-2');

  card.appendChild(movieImage);
  card.appendChild(movieTitle);
  //card.appendChild(movieGenre);
  //card.appendChild(movieRelease);
  card.appendChild(button);

  return card;
}

function createAddFavoriteButton() {
  const addToJournalBtn = document.createElement('button');
  addToJournalBtn.textContent = 'Add to Journal';
  addToJournalBtn.classList.add(
    'bg-amber-600',
    'border-solid',
    'border-slate-300',
    'rounded',
    'w-1/2',
    'p-1',
    'text-xs',
    'text-orange-100',
    'mx-auto',
    'mb-1',
    'hover:bg-amber-800',
    'active:bg-amber-950'
  );

  return addToJournalBtn;
}

function createRemoveFavoriteButton() {
  const removeFromJournalBtn = document.createElement('button');
  removeFromJournalBtn.textContent = 'Remove from Journal';
  removeFromJournalBtn.classList.add(
    'bg-amber-600',
    'border-solid',
    'border-slate-300',
    'rounded',
    'w-1/2',
    'p-1',
    'text-xs',
    'text-red-100',
    'mx-auto',
    'mb-1',
    'hover:bg-amber-800',
    'active:bg-amber-950'
  );

  return removeFromJournalBtn;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add(
    'flex',
    'flex-row',
    'align-center',
    'justify-between',
    'm-4',
    'p-2',
    'bg-gray-300'
  );

  const logo = document.createElement('img');
  logo.classList = 'h-10 w-80';
  logo.src =
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg';
  const navSearchContainer = document.createElement('div');
  navSearchContainer.classList.add(
    'flex',
    'flex-row',
    'flex-nowrap',
    'gap-4',
    'items-center',

    'border-3',
    'rounded-md'
  );
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  ul.classList =
    'flex flex-col content-around justify-around lg:flex-row lg:gap-4 border-r-2';

  const home = document.createElement('li');
  home.classList.add('hover:bg-gray-800', 'hover:text-white', 'px-4', 'mx-4');
  const homeLink = document.createElement('a');
  homeLink.href = 'index.html';
  homeLink.textContent = 'Home';
  homeLink.classList.add('text-xl');
  home.appendChild(homeLink);

  // <li class="p-3 text-[#D0DB97]"><a href="index.html">Home</a></li>

  const journal = document.createElement('li');
  journal.classList.add(
    'hover:bg-gray-800',
    'hover:text-white',
    'px-4',
    'mx-4'
  );
  const journalLink = document.createElement('a');
  journalLink.href = 'journal.html';
  journalLink.classList.add('text-xl');
  journalLink.textContent = 'Journal';
  homeLink.classList.add('text-xl');
  journal.appendChild(journalLink);

  ul.appendChild(home);
  ul.appendChild(journal);
  nav.appendChild(ul);

  const lupe = document.createElement('div');

  lupe.innerHTML = `<input 
                        type="text" 
                        id="searchInput" 
                        placeholder="Search..." 
                        class="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-gray-800" 
                    />
                    <button 
                        id="searchButton" 
                        class="ml-2 bg-gray-400 text-black rounded-lg p-2 hover:bg-gray-800 hover:text-white"
                    >
                        Search
                    </button>`;

  header.appendChild(logo);
  header.appendChild(navSearchContainer);
  navSearchContainer.appendChild(nav);
  navSearchContainer.appendChild(lupe);

  return header;
}

function createFooter() {}

export { createHeader, createFooter, createCard, createJournalCard, lupe };
