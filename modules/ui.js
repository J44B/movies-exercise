// functions to display data
export function createCard(data) {
  const card = document.createElement('div');


  card.classList.add(
    'bg-slate-800',
    'shadow-lg',
    'h-64',
    'w-40',
    'border-solid',
    'border-1',
    'border-slate-800',
    'flex',
    'flex-row',
    'text-sm',
    'rounded-t',
    'm-2'
  );
  const movieImage = document.createElement('img');
  movieImage.src = data.poster_path;
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
    'mt-2'
  )
  const movieGenre = document.createElement('p');
  movieGenre.textContent = data.genres;
  movieGenre.classList.add(
    'text-white',
    'p-2',
    'mt-2'
  );

  const movieRelease = document.createElement('p');
  movieRelease.textContent = data.release_date;
  movieRelease.classList.add(
    'text-white',
    'p-2'
  );

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
  addToJournalBtn.onclick = () => {
    addToLocalStorage('card', data);
  };




  card.appendChild(movieImage);
  card.appendChild(movieTitle);
  card.appendChild(movieGenre);
  card.appendChild(movieRelease);
  card.appendChild(addToJournalBtn);

  return card;
}