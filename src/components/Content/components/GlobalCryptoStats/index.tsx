import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalCoins from "./components/TotalCoins";
import Total24hVolume from "./components/Total24hVolume";
import TotalExchanges from "./components/TotalExchanges";
import TotalMarketCap from "./components/TotalMarketCap";
import TotalMarkets from "./components/TotalMarkets";
import { CoinStats } from "./components/TotalCoins";
import style from "./style.module.scss";

const initialState = {
    totalCoins: 0,
    totalMarkets: 0,
    totalExchanges: 0,
    totalMarketCap: 0,
    total24hVolume: 0,
}

const GlobalCryptoStats = () => {

    const [coinStat, setCoinStat] = useState<CoinStats>(initialState);

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/stats',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '2b7b78b59cmsh684721b9cbcd575p1920a3jsn42c6c9c37fce'
            }
        };

        axios.request(options).then(function (response) {
            setCoinStat(response.data.data)
        }).catch(function (error) {
            console.error(error);

        });
    }, [])


    return (
        <div className={style.globalStats} >
            <h2 className={style.glovalStats_text}>
                Global Crypto Stats
            </h2>
            <TotalCoins stats={coinStat} />
            <Total24hVolume stats={coinStat} />
            <TotalExchanges stats={coinStat} />
            <TotalMarketCap stats={coinStat} />
            <TotalMarkets stats={coinStat} />
        </div>
    )
}

export default GlobalCryptoStats;