import cls from './Main.module.css';
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import LatestNews from "../../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {
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

    return (
        <main className={cls.main}>
            <LatestNews isLoading={isLoading} banners={data && data.news} />
            <NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilter={changeFilter} />
            {/*{dataCategories ? (*/}
            {/*    <Categories*/}
            {/*        categories={dataCategories.categories}*/}
            {/*        selected={filters.category}*/}
            {/*        setSelected={(category) => changeFilter('category', category)}*/}
            {/*    />) : null}*/}
            {/*<Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)}/>*/}
            {/*<Pagination*/}
            {/*    handleNextPage={handleNextPage}*/}
            {/*    handlePrevPage={handlePrevPage}*/}
            {/*    handlePageClick={handlePageClick}*/}
            {/*    totalPages={TOTAL_PAGES}*/}
            {/*    currentPage={filters.page_number}*/}
            {/*/>*/}
            {/*<NewsList isLoading={isLoading} news={data?.news}/>*/}
            {/*<Pagination*/}
            {/*    handleNextPage={handleNextPage}*/}
            {/*    handlePrevPage={handlePrevPage}*/}
            {/*    handlePageClick={handlePageClick}*/}
            {/*    totalPages={TOTAL_PAGES}*/}
            {/*    currentPage={filters.page_number}*/}
            {/*/>*/}
        </main>
    );
}
export default Main