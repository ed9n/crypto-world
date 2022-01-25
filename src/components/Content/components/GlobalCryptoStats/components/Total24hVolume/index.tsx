import React, { memo } from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
};

const Total24hVolume: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const total24hVolume: number = stats.total24hVolume;
    const roundNumber: number = Math.round(total24hVolume * 10) / 10;
    const changeNumberToString: string = roundNumber.toString();
    const newTotal24hVolume: string = changeNumberToString.slice(0, 3) + "." + changeNumberToString.slice(-1) + "B";

    return (
        <div className={style.total24h}>
            <p className={style.total24h_text}>
                Total 24h Volume:
            </p>
            <div className={style.total24h_number}>
                ${newTotal24hVolume}
            </div>
        </div>
    )
}

export default memo(Total24hVolume);