import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}





const TotalCoins: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const totalCoins = stats.totalCoins;
    const changeNumberToString = totalCoins.toString();
    const newTotalCoins= changeNumberToString.slice(0, 2) + "," + changeNumberToString.slice(2);
    return (
        <div >
            <div className={style.cryptocurrencies}>Total Cryptocurrencies
                <div>
                    {newTotalCoins}
                </div>
            </div>
        </div>
    )
}

export default TotalCoins;