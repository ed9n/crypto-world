import React, { useEffect, useState } from "react";
import axios from "axios";
import ExchangesItem from "./components/ExchangesItem";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/exchanges`,
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                limit: '5',
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
            setExchanges(response.data.data.exchanges)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className={style.block_exchanges}>
            <div className={style.block_exchanges_text}>
                <h2>Top Bitcoin exchanges</h2>
                <p>The top crypto exchanges that have Bitcoin available for trading,
                    ranked by 24h trading volume and the current price.</p>
            </div>
            <table className={style.exchanges_table}>
                <thead className={style.exchanges_table_thead}>
                    <tr className={style.exchanges_table_thead_tr}>
                        <th className={style.exchanges_table_thead_th_one}>EXCHANGE</th>
                        <th className={style.exchanges_table_thead_th_two}>24H VOLUME</th>
                    </tr>
                </thead>
                {exchanges.map(item => (
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

export default Exchanges;