import React, { useEffect, useState } from 'react';

import { getTrendingAll } from 'components/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const trendingData = await getTrendingAll('');
        const trendingMovies = trendingData.results;

        setMovies(trendingMovies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
      {isLoading && <Loader />}
    </>
  );
};

export default Home;