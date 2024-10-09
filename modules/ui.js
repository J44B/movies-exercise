// functions to display data
export function createCard(data) {
  const card = document.createElement('div');

  card.classList.add(
    'bg-slate-800',
    'shadow-lg',
    'h-48',
    'w-40',
    'border-solid',
    'border-1',
    'border-slate-800',
    'flex',
    'flex-row',
    'text-sm',
    'rounded-t'
  );
  const movieImage = document.createElement('img');
  movieImage.src = data.image;
  movieImage.classList.add(
    'h-2/3',
    'w-full',
    'object-contain',
    'shadow-lg',
    'shadow-slate-400'
  );

  const movieTitel = document.createElement('p');
  movieTitel.textContent = data.title;
  movieTitel.classList.add(
    'truncate',
    'white',
    'font-bold',
    'p-2',
    'mt-2'
  )
  const movieRunTime = document.createElement('p');
  movieRunTime.textContent = `${data.runtTime} minutes`;
  movieRunTime.classList.add(
    'text-'
  )
}