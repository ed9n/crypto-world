import React, { memo, useEffect, useState } from "react";
import ExchangesItem from "../ExchangesItem";
import style from "./style.module.scss";
import { Link, useParams } from "react-router-dom";
import { getFiveExchanges } from "requests/coins";

const TopFiveExchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        getFiveExchanges(uuid).then((coins: any) => {
            setExchanges(coins)
        })
    }, []);

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
                        coinrankingUrl={item.coinrankingUrl}
                    />
                ))}
            </table>
            <div className={style.block_exchanges_link}>
                <Link
                    to={`/Exchanges/${uuid}`}
                    className={style.exchanges_link}>
                    Show more
                </Link>
            </div>
        </div>
    )
}

export default memo(TopFiveExchanges);