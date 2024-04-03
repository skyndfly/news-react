import cls from './Main.module.css';
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
const Main = () => {
    return (
        <main className={cls.main}>
            <NewsBanner />
        </main>
    );
}
export default Main