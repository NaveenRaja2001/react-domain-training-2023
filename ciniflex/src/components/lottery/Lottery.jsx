import React, { useEffect, useState } from 'react'
import Button from '../button/Button';
import style from './Lottery.module.scss';
import { LOTTERY_CONSTANTS, BUTTON_CONSTANTS } from '../../constants/pageConstant';

const Lottery = () => {
    const [value, setValue] = useState('');
    const [lotteryStatus, setLotteryStatus] = useState(false);
    const [error, setError] = useState(null);

    const validateNumber = (number) => {
        const numberRegex = LOTTERY_CONSTANTS.NUMBER_REGEX;
        if (!numberRegex.test(number))
            return LOTTERY_CONSTANTS.VALID_NUMBER;
        return parseInt(number) % 2 === 0 ? LOTTERY_CONSTANTS.LUCKY : LOTTERY_CONSTANTS.UNLUCKY;
    }

    const checkLottery = () => {

        if (value.length !== 10)  return;
        
        setValue('');
        const status = validateNumber(value);
        status === LOTTERY_CONSTANTS.LUCKY? setLotteryStatus(true):setError(status);

    }
    useEffect(() => {
        if (error) {
            throw new Error(error);
        }
    }, [error]);


    return (
        <div className={style.lotteryContainer}>
            {lotteryStatus ? <>
                <p className={style.luckyMessagetext}>
                    {LOTTERY_CONSTANTS.LUCKY_MESSAGE}
                </p>
            </> :
                <>
                    <p className={style.lotteryText}>
                        {LOTTERY_CONSTANTS.LOTTERY_TITLE}
                    </p>
                    <input type={LOTTERY_CONSTANTS.LOTTERY_INPUT_TYPE} placeholder={LOTTERY_CONSTANTS.LOTTERY_INPUT_PLACEHOLDER} onChange={(event) => setValue(event.target.value)} maxLength={10} minLength={10} />
                    <Button name={BUTTON_CONSTANTS.LOTTERY_BUTTON} style={style.lotteryButton} onClick={checkLottery} />
                </>}
        </div>
    )
}

export default Lottery;