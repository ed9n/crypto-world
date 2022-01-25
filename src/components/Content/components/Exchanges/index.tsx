import React, { memo } from "react";
import AllExchanges from "./components/AllExchanges";
import style from "./style.module.scss";

const Exchanges = () => {
    return(
        <div className={style.block_allExchange}>
            <AllExchanges/>
        </div>
    )
};

export default memo(Exchanges);