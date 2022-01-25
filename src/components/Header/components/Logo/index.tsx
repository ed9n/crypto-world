import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png"
import style from "./style.module.scss"

const Logo = () => {
    return (
        <div className={style.logo}>
                <Link to='/Home' className={style.logo_link}>
                    <img src={logo} className={style.img} />
                </Link>
        </div>
    )
}

export default Logo;