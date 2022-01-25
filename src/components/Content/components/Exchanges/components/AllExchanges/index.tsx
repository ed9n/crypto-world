import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import ExchangesItem from "../ExchangesItem";
import { getFiftyExchanges, getCoin} from "requests/coins";

interface Coin {
    name: string,
    iconUrl: string
};

const initialState = {
    name: '',
    iconUrl: ''
};

const AllExchanges = () => {

    const [exchangesAll, setExchangesAll] = useState([]);
    const [coin, setCoin] = useState<Coin>(initialState);
    const { uuid } = useParams();

    useEffect(() => {
        getFiftyExchanges(uuid).then((coins: any) => {
            setExchangesAll(coins)
        })
    }, []);

    useEffect(() => {
        getCoin(uuid).then((coins: any) => {
            setCoin(coins)
        })
    }, []);


    return (
        <div className={style.block_allExchanges}>
            <div className={style.block_allExchanges_block_nameAndImg}>
                <img src={coin.iconUrl} />
                <h2>{coin.name}</h2>
            </div>
            <h3>Top 50 exchanges </h3>
            <table className={style.exchanges_table}>
                <thead className={style.exchanges_table_thead}>
                    <tr className={style.exchanges_table_thead_tr}>
                        <th className={style.exchanges_table_thead_th_one}>EXCHANGE</th>
                        <th className={style.exchanges_table_thead_th_two}>24H VOLUME</th>
                    </tr>
                </thead>
                {exchangesAll.map(item => (
                    <ExchangesItem
                        name={item.name}
                        key={item.uuid}
                        uuid={item.uuid}
                        iconUrl={item.iconUrl}
                        rank={item.rank}
                        volume={item['24hVolume']}
                        price={item.price}
                        coinrankingUrl={item.coinrankingUrl}
                    />
                ))}
            </table>
        </div>
    )
}

export default memo(AllExchanges);