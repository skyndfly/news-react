import cls from './LatestNews.module.css';
import BannersList from "../BannersList/BannersList.jsx";

const LatestNews = ({banners, isLoading}) => {
    return (
        <section className={cls.section}>
            <BannersList  banners={banners} isLoading={isLoading} />
        </section>
    );
}

export default LatestNews;