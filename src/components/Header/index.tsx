import React, { memo } from "react";
import style from "./style.module.scss";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.container}>

                <div className={style.block_logo}>
                    <Logo />
                </div>
                <div className={style.block_menu}>
                    <Menu />
                </div>

            </div>
        </div>

    )
}

export default memo(Header);

