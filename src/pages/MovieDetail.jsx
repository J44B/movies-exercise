import { useState, useEffect } from 'react';
import { addFavorite, fetchMovie } from '../modules';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components';

export const MovieDetail = () => {
  // wie man den Search verstecken?
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const result = await fetchMovie(id);
        console.log('fetchMovie', result);
        setMovie(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => {
      console.log('Cleanup function ran');
    };
  }, []);

  const handleAddToJournal = (movie) => {
    addFavorite(movie);
  };
  return (
    <>
      {' '}
      <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
            alt={movie.title}
          />
          <div className="ml-4">
            <h1 className="text-5xl font-bold">{movie.title}</h1>
            <p className="py-2 text-gray-200">{movie.tagline}</p>
            <p className="py-4">{movie.overview}</p>

            <div className="flex flex-wrap mb-4">
              {(movie.genres || []).map((genre) => (
                <span
                  key={genre.id}
                  className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mr-2"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold">Rating: </span>
              <span className="ml-2 text-lg text-yellow-500">
                {movie.vote_average}
              </span>
              <span className="ml-1">({movie.vote_count} votes)</span>
            </div>

            <div className="mb-4">
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Official Website
              </a>
            </div>

            <Button
              label="Add to Favorite"
              color="amber"
              onClick={() => handleAddToJournal(movie)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
