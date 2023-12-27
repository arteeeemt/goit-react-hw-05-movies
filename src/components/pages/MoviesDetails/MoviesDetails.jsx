import { getMovieDetails } from 'components/api';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  LinkAdd,
  ListAdd,
  MovieWrapper,
  MovieTitle,
  MovieSubtitle,
  AddInfo,
  GenresList,
} from './MoviesDetails.styled';
import Loader from 'components/Loader/Loader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLink = useRef(location);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);
  const {
    original_title,
    popularity,
    overview,
    genres,
    release_date,
    poster_path,
  } = movieInfo || {};

  return (
    <>
      <Link to={backLink.current.state?.from ?? '/'}>
        <Button type="button">Go Back</Button>
      </Link>
      {isLoading && <Loader />}
      {movieInfo && (
        <Container>
          <img
            style={{ borderRadius: 5 }}
            width={300}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://via.placeholder.com/300x300/258DC8/E0F6FD?text=Image+is+not+availible`
            }
            alt={original_title}
          />
          <MovieWrapper>
            <MovieTitle>
              {original_title} ({release_date.slice(0, 4)})
            </MovieTitle>
            <p>User score: {Math.round(popularity)}</p>
            <MovieSubtitle>Overview</MovieSubtitle>
            <p>{overview}</p>
            <MovieSubtitle>Genres</MovieSubtitle>
            <GenresList>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name},</li>
              ))}
            </GenresList>
            <AddInfo>Additional information</AddInfo>
            <ListAdd>
              <li>
                <LinkAdd to="cast">Cast: see more</LinkAdd>
              </li>
              <li>
                <LinkAdd to="reviews">Reviews: see more</LinkAdd>
              </li>
            </ListAdd>
          </MovieWrapper>
        </Container>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;