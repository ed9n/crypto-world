import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}

const TotalMarkets: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const totalMarkets = stats.totalMarkets;
    const changeNumberToString = totalMarkets.toString();
    const newTotalMarkets = changeNumberToString.slice(0, 2) + "." + changeNumberToString.slice(-1) + "K";
    return (
        <div className={style.markets}>
            <div className={style.markets_text}>
                Total Markets:
            </div>
            <div className={style.markets_number}>
                {newTotalMarkets}
            </div>
        </div>
    )
}

export default TotalMarkets;