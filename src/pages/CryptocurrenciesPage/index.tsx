import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Coins from "components/Content/components/CoinTable/components/Coins";

const CryptocurrenciesPage = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': '2b7b78b59cmsh684721b9cbcd575p1920a3jsn42c6c9c37fce'
            }
        };

        axios.request(options).then(function (response) {
            setCoins(response.data.data.coins);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return(
        <div className={style.coinTable}>
            <div className={style.coinTable_blocks}>
                {coins.map(item => (
                    <Coins
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    marketCap={item.marketCap}
                    dailyChange={item.change}
                    icon={item.iconUrl}
                    rank={item.rank}
                    />
                ))}
            </div>
        </div>
    )
}

export default CryptocurrenciesPage;