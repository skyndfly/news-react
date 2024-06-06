import cls from './BannersList.module.css'
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import NewsBanner from "../NewsBanner/NewsBanner.tsx";

const BannersList = ({banners}) => {

    return (
        <ul className={cls.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner key={banner.id} item={banner} />
                )
            })}
        </ul>
    )
}
const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');
export default BannersListWithSkeleton;