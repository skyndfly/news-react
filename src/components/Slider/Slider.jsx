import cls from './Slider.module.css';
import React, {useRef} from "react";

const Slider = ({children, step = 150}) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= step;
    };
    const scrollRight = () => {
        sliderRef.current.scrollLeft += step;
    };
    return (
        <div className={cls.slider}>
            <button onClick={scrollLeft} className={cls.arrow}>{`<`}</button>
            {React.cloneElement(children, {ref: sliderRef})}
            <button onClick={scrollRight} className={cls.arrow}>{`>`}</button>
        </div>
    );
}

export default Slider;