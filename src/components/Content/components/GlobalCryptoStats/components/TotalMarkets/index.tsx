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
    const newTotalMarkets= changeNumberToString.slice(0, 2) + "." + changeNumberToString.slice(-1) + "K";
    return (
        <div>
            <div >Total Markets
                <div>
                    {newTotalMarkets}
                </div>
            </div>
        </div>
    )
}

export default TotalMarkets;