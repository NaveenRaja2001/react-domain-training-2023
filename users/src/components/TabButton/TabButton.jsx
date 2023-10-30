import { useState } from 'react';
import style from './TabButton.module.css';

/**
 *@description Method to Tab Button
 * @returns TabButton
 * @author NaveenRaja
 */
export default function TabButton({ onSelect, tabNames }) {
    const [selectedButton, setSelectedButton] = useState('');

    const selectButton = (status) => {
        setSelectedButton(status);
    };
    const linkButton = { tabNames } && tabNames.map((tabName) => <li className={`${style.list} ${selectedButton === tabName ? style.active : ''}`} onClick={() => { selectButton(tabName) }}>{tabName}</li>);
    return (
        <ul className={style.listcontainer}>
            {linkButton}
        </ul>
    );
}