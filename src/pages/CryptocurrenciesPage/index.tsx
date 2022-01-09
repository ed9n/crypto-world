import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Coins from "components/Content/components/CoinTable/components/Coins";
import * as _ from "lodash";
import { debounce, filter } from "lodash";


const CryptocurrenciesPage = () => {

    const [coins, setCoins] = useState([]);
    const [value, setValue] = useState('');

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


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    // const test = _.debounce(filterCoins(), 3000);

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
    }

    let coin = filterCoins()


    return (
        <div className={style.coinTable}>
            <div className={style.block_input}>
                <input onChange={onChangeHandler} placeholder="Search Cryptocurrencies" />
            </div>

            <div className={style.coinTable_blocks}>
                {coin.map(item => (
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