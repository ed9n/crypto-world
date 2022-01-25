import React, { memo } from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
};

const TotalMarketCap: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const totalMarketCap = stats.totalMarketCap;
    const roundNumber = Math.round(totalMarketCap * 10) / 10;
    const changeNumberToString = roundNumber.toString();
    const newTotalMarketCap = changeNumberToString.slice(0, 1) + "." + changeNumberToString.slice(-1) + "T";

    return (
        <div className={style.marketCap}>
            <p className={style.marketCap_text}>
                Total Market Cap:
            </p>
            <div className={style.marketCap_number}>
                ${newTotalMarketCap}
            </div>
        </div>
    )
}

export default memo(TotalMarketCap);