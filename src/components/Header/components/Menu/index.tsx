import React from "react";
import style from "./style.module.scss"
import MenuItem from "./components/MenuItem";
// import { slide as Menu } from 'react-burger-menu';

const Menu = () => {
    return(
        <div className={style.menu}>
            <MenuItem to="/Home" children="Home" />
            <MenuItem to="/Cryptocurrencies" children="Cryptocurrencies"/>
            <MenuItem to="/Exchanges" children="Exchanges"/>
            <MenuItem to="/News" children="News"/>
        </div>

    //     <Menu>
    //     <a id="home" className="menu-item" href="/">Home</a>
    //     <a id="about" className="menu-item" href="/about">About</a>
    //     <a id="contact" className="menu-item" href="/contact">Contact</a>
    //   </Menu>
    )
}

export default Menu;