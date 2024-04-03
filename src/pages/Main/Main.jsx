import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
const Main = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () =>{
            try{
                const response = await getNews();
                console.log(response)
                setNews(response.news);
            }catch (error){
                console.log(error)
            }
        }
        fetchNews();
    }, []);
    return (
        <main className={cls.main}>
            {news.length > 0 ? <NewsBanner item={news[3]} /> : null}
        </main>
    );
}
export default Main