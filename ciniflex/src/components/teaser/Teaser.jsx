
import React, { useState, useRef, useEffect } from 'react';
import pauseIcon from '../../assets/play-button.svg';
import Image from '../images/Image';
import HOC from '../teaserHOC/AdHandler'
import style from './Teaser.module.scss';
import ShortAd from '../../assets/advertisements/small-promos/Advertisement-Small-2.png';
import posterImg from '../../assets/advertisements/posterImage.jpeg';
import { minuteConverter } from '../../utils/CiniflexUtils';
import { TEASER_AD_SETTINGS } from '../../constants/pageConstant';
import PropTypes from 'prop-types'; 

const Treaser = (props) => {
    const videoRef = useRef(null);
    const pauseIconRef = useRef();
    const [count, setCount] = useState(0);
    const { showAd=true, timer=0, message='', displayContentorAd= () => {}, adsNotification=false, stopAd= () => {}, content={} } = props;

    const onPauseHandler = () => {
        videoRef.current.pause();
        if (!showAd) pauseIconRef.current.style.display = '';
    }
    const onPlayHandler = () => {
        videoRef.current.play();
        if (!showAd) pauseIconRef.current.style.display = 'none';
    }

    const togglePlay = () => {
        if (videoRef.current.paused) {
            if (count == 0) setCount((prevCount) => prevCount + 1)
            pauseIconRef.current.style.display = 'none';
            videoRef.current.play();
        } else {
            pauseIconRef.current.style.display = '';
            videoRef.current.pause();
        }
    };
    useEffect(() => {
        let interval;
        if (count != 0 && timer >= 0 && videoRef?.current.currentTime < 5) {
            interval = setInterval(() => {
                displayContentorAd(5 - Math.ceil(videoRef.current.currentTime), TEASER_AD_SETTINGS.ADVERTISEMENT_MESSAGE, true)
            }, 1000);
        }
        else if (timer <= 0 && !showAd && count != 0) {
            videoRef.current.style.display = 'none';
            videoRef.current.pause();
            pauseIconRef.current.style.display = 'none';
            displayContentorAd(2, TEASER_AD_SETTINGS.CONTENT_MESSAGE, false)
        }
        else if (timer >= 0 && showAd) {
            interval = setInterval(() => {
                displayContentorAd(timer - 1, TEASER_AD_SETTINGS.CONTENT_MESSAGE, false)
            }, 1000);
        }
        else if (timer < 0 && showAd) {
            videoRef.current.style.display = '';
            videoRef.current.play();
            stopAd()
        }
        return () => {
            clearInterval(interval);
        }
    }, [timer, count])
    return (
        <div>
            <div className={style.videoContainer}>
                {showAd && <Image style={style.ad} src={ShortAd} alt="ad" />}
                <video ref={videoRef} onPause={onPauseHandler} onPlay={onPlayHandler} onClick={togglePlay} poster={posterImg}>
                    <source src={content.videoSrc} type="video/mp4" />
                </video>
                <div ref={pauseIconRef}>
                    <Image src={pauseIcon} alt='pauseIcon' style={style.pauseIcon} onClick={togglePlay} />
                </div>
            </div>
            <h3 className={style.vedioTitle}>
                {content.title}
            </h3>
            <div className={style.adcounting}>
                {adsNotification ? <p>{message + '' + minuteConverter(timer)}</p> : ''}
            </div>
        </div>
    )
}

Treaser.propTypes = {
    showAd: PropTypes.bool.isRequired,
    timer: PropTypes.number.isRequired,
    message: PropTypes.string,
    displayContentorAd: PropTypes.func.isRequired,
    adsNotification: PropTypes.bool.isRequired,
    stopAd: PropTypes.func.isRequired,
    content: PropTypes.shape({
      videoSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  };


export default HOC(Treaser);