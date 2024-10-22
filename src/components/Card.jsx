export const Card = ({ data, button }) => {
  return (
    <div
      id={data.id}
      className="flex flex-col bg-slate-800 shadow-lg h-64 w-40 border-solid border-1 border-slate-800 text-sm rounded-t m-2"
    >
      <img
        className="h-2/3 w-full object-contain shadow-lg shadow-slate-400"
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
      />
      <p className="truncate text-white font-bold p-2 mt-2">{data.title}</p>

      {button}
    </div>
  );
};

//<p className="text-white p-2 mt-2">{data.genres}</p>
