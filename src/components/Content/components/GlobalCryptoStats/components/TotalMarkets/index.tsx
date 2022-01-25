import React, { memo } from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
};

const TotalMarkets: React.FC<{ stats: CoinStats }> = ({ stats }) => {

    const totalMarkets: number = stats.totalMarkets;
    const changeNumberToString: string = totalMarkets.toString();
    const newTotalMarkets: string = changeNumberToString.slice(0, 2) + "." + changeNumberToString.slice(-1) + "K";

    return (
        <div className={style.markets}>
            <p className={style.markets_text}>
                Total Markets:
            </p>
            <div className={style.markets_number}>
                {newTotalMarkets}
            </div>
        </div>
    )
}

export default memo(TotalMarkets);