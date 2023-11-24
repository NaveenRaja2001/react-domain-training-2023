import React from 'react'
import { Languages } from '../../constants/pageConstant';
import style from './OtherLanguage.module.scss'

export const OtherLanguage = () => {
    const otherLanguages = Languages.otherLanguages?.map((language, index) => <div key={index} className={style.languageCard}> <p>{language}</p></div>)

    return (
        <div className={style.languageContainer}>
            <h3> {Languages.title}
            </h3>
            <div className={style.languageWrapper}>
                {otherLanguages}
            </div>

        </div>
    )
}


export default OtherLanguage;