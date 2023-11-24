import React, { useState, useRef, useEffect } from 'react';
import Movies from '../movies/Movies';
import style from './MoviesContainer.module.scss';
import Button from '../button/Button';
import HOC from '../teaserHOC/AdHandler'
import { FaThumbsUp } from 'react-icons/fa6';
import ShortAd from '../../assets/advertisements/large-promos/adv-2.png';
import Image from '../images/Image';
import { minuteConverter } from '../../utils/CiniflexUtils';
import PropTypes from 'prop-types';

import { MOVIE_CONTAINER_CONTSTANTS,BUTTON_CONSTANTS ,DETAILS_AD_SETTINGS} from '../../constants/pageConstant';

export const MoviesContainer = (props) => {
    const { showAd, timer, message, displayContentorAd, adsNotification, stopAd, content, movies, selectedMovie, setSelectedMovie, likeIncrementer } = props;
    const [currentMovie, setCurrentMovie] = useState(movies[1]);
    const [moviesCount, setMoviesCount] = useState(6);

    const actors = selectedMovie?.actors?.map((actor, index) => <li key={index}>{actor}</li>)
    const indivudualMovie = movies?.map((movie, index) => index < moviesCount && <Movies key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} likeIncrementer={likeIncrementer} />);

    const loadMoreHandler = () => {
        setMoviesCount((prevCount) => prevCount >= movies.length ? movies.length : prevCount + 6);
    }

    const likeCounter = () => {
        likeIncrementer(selectedMovie?.id);
    }

    useEffect(() => {
        let interval;
        if (selectedMovie?.id !== currentMovie?.id) {
            setCurrentMovie(selectedMovie);
            stopAd();
            displayContentorAd(DETAILS_AD_SETTINGS.TIME_BEFORE_AD, DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE, true);
            if (timer != DETAILS_AD_SETTINGS.TIME_BEFORE_AD) {
                return;
            }
        }

        if (timer >= 0 && !showAd) {
            interval = setInterval(() => {
                displayContentorAd(timer - 1, DETAILS_AD_SETTINGS.ADVERTISEMENT_MESSAGE, true)
            }, 1000);

        }
        else if (timer <= 0 && !showAd) {
            displayContentorAd(DETAILS_AD_SETTINGS.TIME_AFTER_AD, DETAILS_AD_SETTINGS.CONTENT_MESSAGE, false)
        }
        else if (timer >= 0 && showAd) {
            interval = setInterval(() => {
                displayContentorAd(timer - 1, DETAILS_AD_SETTINGS.CONTENT_MESSAGE, false)
            }, 1000);
        }
        else if (timer < 0 && showAd) {
            stopAd()
        }
        return () => {
            clearInterval(interval);
        }

    }, [timer, selectedMovie])

    return (
        <div >

            <h2 className={style.movieContainerTitle}>{MOVIE_CONTAINER_CONTSTANTS.ALLMOVIES_TITLE}</h2>
            <div className={style.movieContainer}>
                <div className={style.movieWrapper}>
                    {indivudualMovie}
                    {moviesCount < movies.length ? <Button name={BUTTON_CONSTANTS.LOAD_MORE} style={style.loadMore} onClick={loadMoreHandler}></Button> : ''}
                </div>
                <div className={style.movieDetailContainer}>
                    {showAd ? <Image style={style.addImage} src={ShortAd} alt={MOVIE_CONTAINER_CONTSTANTS.ADS} /> :
                        <>
                            <div className={style.detailsHeader}>
                                <h2 className={style.movieTitle}>{selectedMovie?.movie}</h2>
                                <div className={style.iconWrapper} onClick={likeCounter}>
                                    <FaThumbsUp className={style.likeIcon} />
                                </div>
                            </div>
                            <h3 className={style.like}>{selectedMovie?.likes + ' ' + MOVIE_CONTAINER_CONTSTANTS.LIKE} </h3>
                            <div className={style.movieDetails}>
                                <Image style={style.detailsImage} src={selectedMovie?.link} alt={selectedMovie?.movie} />
                                <p className={style.description}>{selectedMovie?.description}</p>
                                <p className={style.actorTitle}>{MOVIE_CONTAINER_CONTSTANTS.ACTORS}</p>
                                <ul className={style.actors}>{actors}</ul>
                            </div>
                        </>}

                    {adsNotification ? <div className={style.adcounting}><p>{message + '' + minuteConverter(timer)}</p></div> : ''}

                </div>
            </div>
        </div>
    )
}

MoviesContainer.propTypes = {
    showAd: PropTypes.bool.isRequired,
    timer: PropTypes.number.isRequired,
    message: PropTypes.string,
    displayContentorAd: PropTypes.func.isRequired,
    adsNotification: PropTypes.bool.isRequired,
    stopAd: PropTypes.func.isRequired,
    content: PropTypes.string,
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        movie: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    selectedMovie: PropTypes.shape({
      id: PropTypes.string.isRequired,
      movie: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
    }).isRequired,
    setSelectedMovie: PropTypes.func.isRequired,
    likeIncrementer: PropTypes.func.isRequired,
  };

export default HOC(MoviesContainer);