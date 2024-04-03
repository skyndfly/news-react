import cls from './NewsBanner.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.jsx";

const NewsBanner = ({item}) => {
    return (
        <div className={cls.banner}>
            <Image image={item.image} />
            <h3 className={cls.title}>{item.title}</h3>
            <p className={cls.extra}>
                {formatTimeAgo(item.published)} | {item.author}
            </p>
        </div>
    )
}
export default NewsBanner;