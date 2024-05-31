import cls from './NewsFilters.module.css';
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({filters, changeFilter}) => {
    const {data: dataCategories} = useFetch(getCategories);
    return (
        <div className={cls.filters}>


            {dataCategories ? (
                <Slider step={200}>
                    <Categories
                        categories={dataCategories.categories}
                        selected={filters.category}
                        setSelected={(category) => changeFilter('category', category)}
                    />
                </Slider>
            ) : null
            }

            <Search
                keywords={filters.keywords}
                setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
        </div>
    );
}

export default NewsFilters;