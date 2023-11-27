import React, { useEffect, useState } from 'react';
import NavHeader from '../../components/navHeader/NavHeader';
import Image from '../../components/images/Image';
import CoverImage from '../../assets/sindel-background.png';
import style from './HomePage.module.scss'
import Trailer from '../../components/trailer/Trailer';
import Lottery from '../../components/lottery/Lottery';
import ErrorBoundary from '../../components/errorBoundary/ErrorBoundary';
import OtherLanguage from '../../components/otherLanguages/OtherLanguage';
import NowShowing from '../../components/nowShowing/NowShowing';
import Treaser from '../../components/teaser/Teaser';
import { TeaserConstant } from '../../constants/pageConstant'
import Loader from '../../components/Loader/Loader';
import { getShortTeasers } from '../../serivce/MovieService'


export const HomePage = () => {
  const [teasers, setTeasers] = useState();
  const [loading, setLoading] = useState(true);

  const teaserCard = teasers?.map((ele, ind) => <Treaser content={ele} key={ind} />);

  useEffect(() => {
    const getTeasers = async () => {
      const movies = await getShortTeasers();
      setTeasers(movies);
      setLoading(false);
    }
    getTeasers();
  }, []);
  return (
    <>
      <NavHeader />
      <Image alt='coverImage' src={CoverImage} style={style.coverImage} />
      <ErrorBoundary style={style.errorContainer}>
        <Lottery />
      </ErrorBoundary>
      <Trailer />
      {loading ? <Loader /> : <div className={style.teaserContainer}>{teaserCard}</div>}
      <OtherLanguage />
    </>
  )
}
export default HomePage;