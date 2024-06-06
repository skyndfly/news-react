import cls from './NewsByFilters.module.css';
import NewsList from "../NewsList/NewsList.tsx";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.ts";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getNews} from "../../api/apiNews.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";

const NewsByFilters = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ''
    })
    const debouncedKeywords = useDebounce(filters.keywords, 1500);
    const {data, isLoading, error} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords
    });

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
            <PaginationWrapper
                top={true}
                bottom={true}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={filters.page_number}>
                <NewsList isLoading={isLoading} news={data && data.news}/>
            </PaginationWrapper>
        </section>
    );
}

export default NewsByFilters;