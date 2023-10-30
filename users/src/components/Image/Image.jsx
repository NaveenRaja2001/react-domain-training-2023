import style from './Image.module.css';
export default function Image({src,alt}) {

    return (
        <div className={style.imageContainer}>
            <img alt={alt} src={src}/>
        </div>
    );
};

