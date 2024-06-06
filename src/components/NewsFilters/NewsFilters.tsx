import cls from './NewsFilters.module.css';
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../api/apiNews.ts";
import Slider from "../Slider/Slider.tsx";

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