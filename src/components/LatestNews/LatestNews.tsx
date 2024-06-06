import cls from './LatestNews.module.css';
import BannersList from "../BannersList/BannersList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getLatestNews} from "../../api/apiNews.ts";

const LatestNews = () => {
    const {data, isLoading, error} = useFetch(getLatestNews);
    return (
        <section className={cls.section}>
            <BannersList  banners={data && data.news} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;