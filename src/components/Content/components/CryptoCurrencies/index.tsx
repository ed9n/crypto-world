import React, {useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Coins from "components/Content/components/CoinTable/components/Coins";
import * as _ from "lodash";
import Input from 'components/Form/Input';


const CryptoCurrencies = () => {

    const [coins, setCoins] = useState([]);
    const [value, setValue] = useState('');

    
        useEffect(() => {
            const options: any = {
                method: 'GET',
                url: 'https://coinranking1.p.rapidapi.com/coins',
                params: {
                  referenceCurrencyUuid: 'yhjMzLPhuIDl',
                  timePeriod: '24h',
                  tiers: '1',
                  orderBy: 'marketCap',
                  orderDirection: 'desc',
                  limit: '50',
                  offset: '0'
                },
                headers: {
                  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                  'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
                }
              };
            axios.request(options).then(function (response) {
                setCoins(response.data.data.coins);
            }).catch(function (error) {
                console.error(error);
            });


            
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
                <Input onChange={onChangeHandler} placeholder={'Search Cryptocurrency'}/>
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

export default CryptoCurrencies;