import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";

const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                console.log(response)
                setNews(response.news);
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={cls.main}>
            {news.length > 0 ? <NewsBanner item={news[3]}/> : null}
            <NewsList news={news}/>
        </main>
    );
}
export default Main