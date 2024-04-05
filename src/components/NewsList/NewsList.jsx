import cls from './NewsList.module.css';
import NewsItem from "../NewsItem/NewsItem.jsx";

const NewsList = ({news}) => {
    return (
        <ul className={cls.list}>
            {news.map(item => {
                return <NewsItem key={item.id} item={item} />
            })}
        </ul>
    );
}
export default NewsList;