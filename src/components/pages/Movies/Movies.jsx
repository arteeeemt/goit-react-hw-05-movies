import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { getByQuery } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');
  const [searchInputValue, setSearchInputValue] = useState(currentQuery || '');

  useEffect(() => {
    if (!currentQuery) return;

    const fetchByQuery = async () => {
      setIsLoading(true);
      try {
        const movieQuery = await getByQuery(currentQuery);
        const currentMovie = movieQuery.results;
        setMovies(currentMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchByQuery();
  }, [currentQuery]);

  const handleSearchInputChange = event => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: searchInputValue });
  };

  return (
    <>
      <SearchBar
        value={searchInputValue}
        onChange={handleSearchInputChange}
        onSubmit={handleSearchSubmit}
      />
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;