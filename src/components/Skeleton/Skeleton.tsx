import cls from './Skeleton.module.css';

const Skeleton = ({count = 1, type = 'banner', direction = 'column'}) => {
    return (
        <>
            {count > 1 ?
                (
                    <ul className={direction === 'column' ? cls.column_list : cls.row_list}>
                        {[...Array(count)].map((_, index) => (
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
