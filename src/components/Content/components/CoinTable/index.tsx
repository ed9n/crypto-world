import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Coins from "./components/Coins";
import { Link } from "react-router-dom";
import { getCoins } from "../../../../requests/coins";

const CoinTable = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getCoins().then((coins: any)=>{
            setCoins(coins)
        }) 
    }, [])

    return (
        <div className={style.coinTable}>
            <div className={style.coinTable_text}>
                <h2 className={style.coinTable_main_text}>Top 10 Cryptos in The World</h2>
                <Link className={style.coinTable_link} to='/Cryptocurrencies'>Show more</Link>
            </div>
            <div className={style.coinTable_blocks}>
                {coins.map(item => (
                    <Coins
                        id={item.id}
                        key={item.uuid}
                        name={item.name}
                        price={item.price}
                        marketCap={item.marketCap}
                        dailyChange={item.change}
                        icon={item.iconUrl}
                        rank={item.rank}
                        uuid={item.uuid}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(CoinTable) 