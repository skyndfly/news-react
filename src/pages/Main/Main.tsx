import cls from './Main.module.css';
import LatestNews from "../../components/LatestNews/LatestNews.tsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.tsx";

const Main = () => {


    return (
        <main className={cls.main}>
            <LatestNews/>
            <NewsByFilters  />
        </main>
    );
}
export default Main