import React from "react";
import logo from "./img/logo.svg"
import style from "./style.module.scss"

const Logo = () => {

    return(
        <div>
            <a href="">
                <img src={logo} className={style.logo}/>
            </a>
        </div>
    )
}

export default Logo;