import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                const response = await getNews();
                setNews(response.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={cls.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[3]}/> : <Skeleton type={'banner'} count={1} />}
            {!isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10} /> }
        </main>
    );
}
export default Main