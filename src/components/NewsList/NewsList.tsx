import cls from './NewsList.module.css';
import NewsItem from "../NewsItem/NewsItem.tsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";

const NewsList = ({news}) => {
    return (
        <ul className={cls.list}>
            {news.map(item => {
                return <NewsItem key={item.id} item={item} />
            })}
        </ul>
    );
}
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);
export default NewsListWithSkeleton;