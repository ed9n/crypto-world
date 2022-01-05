import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}





const TotalExchanges: React.FC<{ stats: CoinStats }> = ({ stats }) => {

    return (
        <div className={style.exchanges}>
            <div className={style.exchanges_text}>
                Total Exchanges:
            </div>
            <div className={style.exchanges_number}>
                {stats.totalExchanges}
            </div>
        </div>
    )
}

export default TotalExchanges;