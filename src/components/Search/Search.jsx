import cls from './Search.module.css';

const Search = ({keywords, setKeywords}) => {
    return (
        <div className={cls.search}>
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className={cls.input}
                placeholder="Поиск..."
            />
        </div>
    );
}
export default Search;