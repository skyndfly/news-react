import cls from './Image.module.css';

const Image = ({image}) => {
    return (
        <div className={cls.wrapper}>
            {image ? <img src={image} alt='news' className={cls.img}/> : null}
        </div>
    );
}
export default Image;