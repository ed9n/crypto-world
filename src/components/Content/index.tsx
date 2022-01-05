import React from "react";
import style from "./style.module.scss";
import GlobalCryptoStats from "./components/GlobalCryptoStats";
import CoinTable from "./components/CoinTable";

const Content = () => {
    return(
        <div className={style.content}>
            <GlobalCryptoStats/>
            <CoinTable/>
        </div>
    )
}

export default Content