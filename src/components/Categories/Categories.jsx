import cls from './Categories.module.css';
import {forwardRef} from "react";

const Categories = forwardRef(
    ({categories, setSelected, selected}, ref) => {
    return (
        <div ref={ref} className={cls.categories}>
            <button onClick={() => setSelected(null)}
                    className={!selected ? cls.active : cls.item}>
                All
            </button>
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
});
export default Categories;