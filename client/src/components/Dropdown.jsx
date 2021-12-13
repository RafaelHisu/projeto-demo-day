import { useState } from "react";
import { categoria } from "../data/categoria";
import { Link } from "react-router-dom";


function Dropdown() {
    const [dropdown, setDropdown] = useState(false);

    return <>
        <ul className={dropdown ? "categorias-submenu clicked" : "categorias-submenu"} onClick={() => setDropdown(!dropdown)}>
            {categoria.map(item => {
                return (
                    <li key={item.id}>
                        <Link
                            to={"/pesquisa?busca=" + item.nome}
                            className="submenu-item"
                            onClick={() => setDropdown(false)}
                        >
                            {item.nome}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </>


}

export default Dropdown;