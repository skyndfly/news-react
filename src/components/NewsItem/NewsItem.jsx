import cls from './NewsItem.module.css';
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
const NewsItem = ({ item }) => {
    return(
        <li className={cls.item}>
            <div className={cls.wrapper} style={{backgroundImage: `url(${item.image})`}}>

            </div>
            <div className={cls.info}>
                <h3 className={cls.title}>{item.title}</h3>
                <p className={cls.extra}>
                    {formatTimeAgo(item.published)} | {item.author}
                </p>
            </div>
        </li>
    );
}
export default NewsItem;