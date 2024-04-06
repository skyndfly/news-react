import cls from './Categories.module.css';

const Categories = ({categories, setSelected, selected}) => {
    return (
        <div className={cls.categories}>
            {categories.map(category => {
                return (
                    <button onClick={() => setSelected(category)} key={category}
                            className={selected === category ? cls.active : cls.item}>
                        {category}
                    </button>
                );
            })}
        </div>
    )
}
export default Categories;