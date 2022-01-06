import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg"
import style from "./style.module.scss"

const Logo = () => {
    return (
        <div className={style.logo}>
            <div>
                <Link to='/Home'>
                    <img src={logo} className={style.img} />
                </Link>
            </div>
        </div>
    )
}

export default Logo;