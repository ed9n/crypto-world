import React from "react";
import GlobalCryptoStats from "./components/GlobalCryptoStats";
import style from "./style.module.scss";

const Content = () => {
    return(
        <div className={style.content}>
            
            <GlobalCryptoStats/>
        </div>
    )
}

export default Content