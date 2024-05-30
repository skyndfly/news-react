import cls from './LatestNews.module.css';
import BannersList from "../BannersList/BannersList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getLatestNews, getNews} from "../../api/apiNews.js";

const LatestNews = () => {
    const {data, isLoading, error} = useFetch(getLatestNews);
    return (
        <section className={cls.section}>
            <BannersList  banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;