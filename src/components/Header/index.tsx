import React from "react";
import style from "./style.module.scss"
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/components/MenuItem";

const Header = () => {

    return(
        <div>
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Header

