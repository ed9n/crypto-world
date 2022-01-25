import React, { memo } from "react";
import style from "./style.module.scss";
import MenuItem from "./components/MenuItem";

const Menu = () => {
    return (
        <div className={style.menu}>
            <MenuItem to="/Home" children="Home" />
            <MenuItem to="/Cryptocurrencies" children="Cryptocurrencies" />
            <MenuItem to="/News" children="News" />
        </div>
    )
}

export default memo(Menu);