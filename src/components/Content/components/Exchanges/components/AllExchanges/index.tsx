import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./style.module.scss";
import ExchangesItem from "../ExchangesItem";

interface Coin {
    name: string,
    iconUrl: string
}
const initialState = {
    name: '',
    iconUrl: ''
}

const AllExchanges = () => {

    const [exchangesAll, setExchangesAll] = useState([]);
    const [coin, setCoin] = useState<Coin>(initialState);
    const { uuid } = useParams();

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges`,
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                limit: '50',
                offset: '0',
                orderBy: '24hVolume',
                orderDirection: 'desc'
            },
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
        };

        axios.request(options).then(function (response) {
            setExchangesAll(response.data.data.exchanges)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
            params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
        };

        axios.request(options).then(function (response) {
            setCoin(response.data.data.coin);
        }).catch(function (error) {
            console.error(error);
        });
    })


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
                    />
                ))}
            </table>
        </div>
    )
}

export default AllExchanges;