import React from "react";
import logo from "./img/logo.svg"
import style from "./style.module.scss"

const Logo = () => {

    return(
        <div className={style.logo}>
            <a href="">
                <img src={logo} className={style.img}/>
            </a>
        </div>
    )
}

export default Logo;