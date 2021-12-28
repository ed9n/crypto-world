import React from "react";
import style from "./style.module.scss"
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {

    return(
        <div className={style.header}>
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header

