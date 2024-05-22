import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";

const Main = () => {
    const [selectCategory, setSelectCategory] = useState("All");
    const [keywords, setKeywords] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    const debouncedKeywords = useDebounce(keywords, 1500);
    const {data, isLoading, error} = useFetch(getNews, {
        page_number: currentPage,
        page_size: PAGE_SIZE,
        category: selectCategory === "All" ? null : selectCategory,
        keywords: debouncedKeywords
    });
    const {data: dataCategories} = useFetch(getCategories);

    const handleNextPage = () => {
        if (currentPage < TOTAL_PAGES) {
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <main className={cls.main}>
            <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]}/>

            {dataCategories ? <Categories
                categories={dataCategories.categories}
                setSelected={setSelectCategory}
                selected={selectCategory}
            /> : null}
            <Search keywords={keywords} setKeywords={setKeywords}/>
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={currentPage}
            />
            <NewsList isLoading={isLoading} news={data?.news}/>
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                currentPage={currentPage}
            />
        </main>
    );
}
export default Main