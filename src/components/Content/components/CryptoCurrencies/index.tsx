import React, { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import Coins from "../CoinTable/components/Coins";
import Input from "../../../Form/Input";
import { getCoinsFifty } from "requests/coins";

const CryptoCurrencies = () => {

    const [coins, setCoins] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getCoinsFifty().then((coins: any) => {
            setCoins(coins)
        })
    }, []);

    useEffect(() => {
        filterCoins();
    }, [value]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    };

    function filterCoins() {
        if (value === '') {
            return coins
        } else {
            const coinsFilter = coins.filter(item => {
                const coinName: string = item.name.toLowerCase()
                const inputValue: string = value.toLowerCase()
                if (coinName === inputValue) {
                    return true
                } else {
                    return false
                }
            })
            return coinsFilter
        }
    };

    let coin = filterCoins();

    return (
        <div className={style.coinTable}>
            <div className={style.block_input}>
                <Input onChange={onChangeHandler} placeholder={'Search Cryptocurrency'} />
            </div>
            <div className={style.coinTable_blocks}>
                {coin.map(item => (
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

export default memo(CryptoCurrencies);