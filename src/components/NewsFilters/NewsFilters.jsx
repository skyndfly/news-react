import cls from './NewsFilters.module.css';
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";

const NewsFilters = ({filters, changeFilter}) => {
    const {data: dataCategories} = useFetch(getCategories);
    return (
        <div className={cls.filters}>
            {dataCategories ? (
                <Categories
                    categories={dataCategories.categories}
                    selected={filters.category}
                    setSelected={(category) => changeFilter('category', category)}
                />) : null}
            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
        </div>
    );
}

export default NewsFilters;