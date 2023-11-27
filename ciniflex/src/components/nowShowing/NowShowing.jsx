import React from 'react'
import style from './NowShowing.module.scss'
import { NOW_SHOWING, TRAILERS } from '../../constants/pageConstant';

const NowShowing = () => {
    return (
        <div className={style.nowShowingContainer}>
            <div className={style.nowShowingContent}>
                <p className={style.sectionTitle}>{NOW_SHOWING.TITLE}</p>
                <p className={style.movieTitle}>{TRAILERS.MOVIE_TITLE}</p>
                <div>
                    <iframe src={NOW_SHOWING.URL} className={style.movie} title="YouTube video player" ></iframe>
                </div>
                <p className={style.description}>{TRAILERS.MOVIE_DESCRIPTION}</p>
            </div>
        </div>
    )
}

export default NowShowing;