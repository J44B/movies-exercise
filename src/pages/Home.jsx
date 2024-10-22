import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card, Button } from '../components';
import { addFavorite, fetchPopularMovies, fetchMovies } from '../modules';

export const Home = () => {
  const { searchQuery } = useOutletContext();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        let result;
        console.log('searchQuery', searchQuery);
        if (searchQuery === '') {
          result = await fetchPopularMovies();
          console.log('fetchPopularMovies', result);
        } else {
          result = await fetchMovies(searchQuery);
          console.log('fetchMovies', result);
        }

        setMovies(result.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => {
      console.log('Cleanup function ran');
    };
  }, [searchQuery]);

  const handleAddToJournal = (movie) => {
    addFavorite(movie);
  };

  if (loading)
    return (
      <div
        id="movie-container"
        className="flex gap-4 mt-2 flex-wrap justify-center"
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        id="movie-container"
        className="flex gap-4 mt-2 flex-wrap justify-center"
      >
        Error: {error}
      </div>
    );

  return (
    <div
      id="movie-container"
      className="flex gap-4 mt-2 flex-wrap justify-center"
    >
      {movies.map((movie) => (
        <Card
          key={movie.id}
          data={movie}
          button={
            <Button
              label="Add to favorite"
              color="amber"
              onClick={() => handleAddToJournal(movie)}
            />
          }
        />
      ))}
    </div>
  );
};
