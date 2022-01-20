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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/stats',
            params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
          };
        axios.request(options).then(function (response) {

            setCoinStat(response.data.data)
        }).catch(function (error) {
            console.error(error);

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

export default GlobalCryptoStats;