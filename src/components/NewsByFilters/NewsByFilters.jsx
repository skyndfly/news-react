import cls from './NewsByFilters.module.css';
import Pagination from "../Pagination/Pagination.jsx";
import NewsList from "../NewsList/NewsList.jsx";
import {TOTAL_PAGES} from "../../constants/constants.js";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {

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
            <NewsFilters filters={filters} changeFilter={changeFilter}/>
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