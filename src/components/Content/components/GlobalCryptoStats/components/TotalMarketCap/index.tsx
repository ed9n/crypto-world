import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}

const TotalMarketCap: React.FC<{ stats: CoinStats }> = ({ stats }) => {
    const totalMarketCap = stats.totalMarketCap;
    const roundNumber = Math.round(totalMarketCap * 10) / 10;
    const changeNumberToString = roundNumber.toString();
    const newTotalMarketCap = changeNumberToString.slice(0, 1) + "." + changeNumberToString.slice(-1) + "T";

    return (
        <div>
            <div >Total Market Cap
                <div>
                    ${newTotalMarketCap}
                </div>
            </div>
        </div>
    )
}

export default TotalMarketCap;