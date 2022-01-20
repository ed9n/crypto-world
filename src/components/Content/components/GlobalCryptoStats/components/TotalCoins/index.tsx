import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}

const TotalCoins: React.FC<{ stats: CoinStats, loading: boolean }> = ({ stats, loading }) => {
    
    const totalCoins: number = stats.totalCoins;
    const changeNumberToString: string = totalCoins.toString();
    const newTotalCoins: string = changeNumberToString.slice(0, 2) + "," + changeNumberToString.slice(2);

    return (
        <div className={style.cryptocurrencies}>
            <p className={style.cryptocurrencies_text}>
                Total Cryptocurrencies:
            </p>
            <div className={style.cryptocurrencies_number}>
                {!loading && newTotalCoins}
            </div>
        </div>
    )
}

export default TotalCoins;