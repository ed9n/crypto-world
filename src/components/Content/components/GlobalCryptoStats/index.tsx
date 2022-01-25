import React, { memo, useEffect, useState } from "react";
import TotalCoins from "./components/TotalCoins";
import Total24hVolume from "./components/Total24hVolume";
import TotalExchanges from "./components/TotalExchanges";
import TotalMarketCap from "./components/TotalMarketCap";
import TotalMarkets from "./components/TotalMarkets";
import { CoinStats } from "./components/TotalCoins";
import style from "./style.module.scss";
import { getStats } from "requests/coins";

const initialState = {
    totalCoins: 0,
    totalMarkets: 0,
    totalExchanges: 0,
    totalMarketCap: 0,
    total24hVolume: 0,
};

const GlobalCryptoStats = () => {

    const [coinStat, setCoinStat] = useState<CoinStats>(initialState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getStats().then((coins: any)=>{
            setCoinStat(coins)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])


    return (
        <div className={style.globalStats} >
            <h2 className={style.glovalStats_text}>
                Global Crypto Stats
            </h2>
            <TotalCoins loading={loading} stats={coinStat} />
            <Total24hVolume stats={coinStat} />
            <TotalExchanges stats={coinStat} />
            <TotalMarketCap stats={coinStat} />
            <TotalMarkets stats={coinStat} />
        </div>
    )
}

export default memo(GlobalCryptoStats);