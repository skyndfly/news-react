import cls from './NewsBanner.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";
import Image from "../Image/Image.tsx";

const NewsBanner = ({item}) => {

    return (
        <div className={cls.banner}>
            <Image image={item?.image} />
            <h3 className={cls.title}>{item.title}</h3>
            <p className={cls.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    )
}
export default NewsBanner;