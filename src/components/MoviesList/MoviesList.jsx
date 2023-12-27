import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, MovieItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p> Movies not found</p>;
  }

  return (
    <List>
      {movies.map(({ id, original_title }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {original_title}
          </MovieLink>
        </MovieItem>
      ))}
    </List>
  );
};

export default MoviesList;