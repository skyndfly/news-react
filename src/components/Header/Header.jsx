import {formatDate} from "../helpers/formatDate.js";

const Header = () => {
    return (
        <header>
            <h1>REACT NEWS</h1>
            <p>{formatDate(new Date())}</p>
        </header>
    );
}

export default Header;