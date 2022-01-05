import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}

const Total24hVolume: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const total24hVolume = stats.total24hVolume;
    const roundNumber = Math.round(total24hVolume * 10) / 10;
    const changeNumberToString = roundNumber.toString();
    const newTotal24hVolume = changeNumberToString.slice(0, 3) + "." + changeNumberToString.slice(-1) + "B";

    return (
        <div className={style.total24h}>
            <div className={style.total24h_text}>
                Total 24h Volume:
            </div>
            <div className={style.total24h_number}>
                {/* <img src={iconDollars} alt="" /> */}
                ${newTotal24hVolume}
            </div>
        </div>
    )
}

export default Total24hVolume;