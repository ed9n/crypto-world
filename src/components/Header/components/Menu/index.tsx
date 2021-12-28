import React from "react";
import style from "./style.module.scss"
import MenuItem from "./components/MenuItem";

const Menu = () => {
    return(
        <div className={style.menu}>
            <MenuItem to="/Home" title="Home" children />
            <MenuItem to="/Cryptocurrencies" title="Cryptocurrencies" children/>
            <MenuItem to="/Exchanges" title="Exchanges" children/>
            <MenuItem to="/News" title="News" children/>
        </div>
    )
}

export default Menu;