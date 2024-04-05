import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = 10;
    const pageSize = 10;
    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
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
            {news.length > 0 && !isLoading ? <NewsBanner item={news[3]}/> : <Skeleton type={'banner'} count={1}/>}
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={totalPage}
                currentPage={currentPage}
            />
            {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10}/>}
            <Pagination
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                totalPages={totalPage}
                currentPage={currentPage}
            />
        </main>
    );
}
export default Main