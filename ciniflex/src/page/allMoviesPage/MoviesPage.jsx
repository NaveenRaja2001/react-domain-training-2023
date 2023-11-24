import React, { useState, useEffect } from 'react';
import NavHeader from '../../components/navHeader/NavHeader';
import { getMovies } from '../../serivce/MovieService';
import MoviesContainer from '../../components/moviesContainer/MoviesContainer';
import Loader from '../../components/Loader/Loader';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMoviesList = async () => {
      const movies = await getMovies();
      setMovies(movies);
      setLoading(false)
      movies.length > 0 && setSelectedMovie(movies[0]);
    }
    getMoviesList();
  }, []);

  const likeIncrementer = (id) => {
    let updated = movies.map((movie) => {
      if (movie.id === id) { movie.likes = parseInt(movie.likes) + 1; }
      return movie;
    });
    setMovies(updated)
  }
  return (
    <>
      <NavHeader />
      {loading ? <Loader /> : <MoviesContainer movies={movies} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} likeIncrementer={likeIncrementer} />}
    </>
  )
}


export default MoviesPage;