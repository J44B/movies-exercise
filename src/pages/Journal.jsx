import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Card, Button } from '../components';
import { removeFavorite, getFavorites } from '../modules';

export const Journal = () => {
  const { searchQuery } = useOutletContext();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setSearchQuery - Call this function in production. In dev rendering happens twice.
    const getData = () => {
      try {
        setLoading(true);
        const result = getFavorites();
        console.log('getFavorites', result);
        setMovies(result);
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

  const handleRemoveFromJournal = (movie) => {
    removeFavorite(movie);
    setMovies((prevMovies) => prevMovies.filter((m) => m.id !== movie.id));
  };

  const filteredMovies =
    searchQuery === ''
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  if (loading)
    return (
      <div
        id="journal-container"
        className="flex gap-4 mt-2 flex-wrap justify-center"
      >
        Loading...
      </div>
    );
  if (error)
    return (
      <div
        id="journal-container"
        className="flex gap-4 mt-2 flex-wrap justify-center"
      >
        Error: {error}
      </div>
    );

  return (
    <div
      id="journal-container"
      className="flex gap-4 mt-2 flex-wrap justify-center"
    >
      {filteredMovies.map((movie) => (
        <Card
          key={movie.id}
          data={movie}
          button={
            <Button
              label="Remove"
              color="red"
              onClick={() => handleRemoveFromJournal(movie)}
            />
          }
        />
      ))}
    </div>
  );
};
