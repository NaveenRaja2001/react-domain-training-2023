import style from './Image.module.css';

/**
 *@description Method to consrtuct card
 * @returns ImageCard
 * @author NaveenRaja
 */
export default function Image({ src, alt }) {
    return (
        <div className={style.imageContainer}>
            <img alt={alt} src={src} />
        </div>
    );
};

