import React from "react";
import style from "./style.module.scss";

export interface CoinStats {
    totalCoins: number,
    totalMarkets: number,
    totalExchanges: number,
    totalMarketCap: number,
    total24hVolume: number
}





const TotalExchanges: React.FC<{stats: CoinStats}> = ({stats}) => {
  
    return(
        <div>
            <div >Total Exchanges
                <div>{stats.totalExchanges}</div>
            </div>
        </div>
    )
}

export default TotalExchanges;