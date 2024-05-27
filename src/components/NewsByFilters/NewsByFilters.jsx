import cls from './NewsByFilters.module.css';
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import NewsList from "../NewsList/NewsList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import {TOTAL_PAGES} from "../../constants/constants.js";

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
    const {data: dataCategories} = useFetch(getCategories);
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1);
        }
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1);
        }
    }
    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber);
    }

    return (
        <section className={cls.section}>
            {dataCategories ? (
                <Categories
                    categories={dataCategories.categories}
                    selected={filters.category}
                    setSelected={(category) => changeFilter('category', category)}
                />) : null}
            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
            <NewsList isLoading={isLoading} news={news}/>
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}
            />
        </section>
    );
}

export default NewsByFilters;