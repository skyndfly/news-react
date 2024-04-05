import cls from './Skeleton.module.css';

const Skeleton = ({count = 1, type = 'banner'}) => {
    return (
        <>
            {count > 1 ?
                (

                    <ul className={cls.list}>
                        {[... Array(count)].map((_, index) => (
                            <li key={index} className={type === 'banner' ? cls.banner : cls.item}></li>
                        ))}
                    </ul>
                ) :
                (
                    <ul className={cls.list}>
                        <li className={type === 'banner' ? cls.banner : cls.item}></li>
                    </ul>
                )
            }
        </>
    );
}
export default Skeleton;
