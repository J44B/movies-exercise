// functions to display data
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

export { createHeader, createFooter };
