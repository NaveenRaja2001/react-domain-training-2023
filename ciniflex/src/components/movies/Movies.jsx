import React from 'react';
import style from './Movies.module.scss';
import { FaThumbsUp } from 'react-icons/fa6';
import Image from '../images/Image';
import {MOVIE_CONTAINER_CONTSTANTS} from '../../constants/pageConstant';
import PropTypes from 'prop-types';

export const Movies = ({ movie={}, setSelectedMovie= () => {}, likeIncrementer= () => {} }) => {
  const likeHandler = () => {
    likeIncrementer(movie?.id);
  }
  const movieDetailHandler = () => {
    setSelectedMovie(movie)
  }
  return (
    <div className={style.movieCard}>
      <Image src={movie?.link} alt={movie?.movie} style={style.movieCardImage} onClick={movieDetailHandler} />
      <h4>
        {movie?.movie}
      </h4>
      <div className={style.likeContainer}>
        <p>{movie?.likes} {MOVIE_CONTAINER_CONTSTANTS.LIKE}</p>
        <FaThumbsUp className={style.likeIcon} onClick={likeHandler} />
      </div>
    </div>
  )
}

Movies.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  setSelectedMovie: PropTypes.func.isRequired,
  likeIncrementer: PropTypes.func.isRequired,
};

export default Movies;
