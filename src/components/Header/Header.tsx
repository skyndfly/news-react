import {formatDate} from "../../helpers/formatDate.ts";
import cls from './Header.module.css';

const Header = () => {
    return (
        <header className={cls.header}>
            <h1 className={cls.title}>REACT NEWS</h1>
            <p className={cls.date}> {formatDate(new Date())}</p>
        </header>
    );
}

export default Header;