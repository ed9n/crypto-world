import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import Ohlc from "./components/Ohlc";
import Exchanges from "./components/Exchanges";
import Description from "./components/Description"
import ProjectLinks from "./components/ProjectLinks"


interface Details {
    description: string,
    name: string,
    iconUrl: string,
    uuid: string,
}

const initialState = {
    description: '',
    name: '',
    iconUrl: '',
    uuid: '',
}

const DetailCoin = () => {

    const { uuid } = useParams();
    const [coins, setCoins] = useState<Details>(initialState);

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/' + uuid,
            params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
        };

        axios.request(options).then(function (response) {
            setCoins(response.data.data.coin);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className={style.description}>
            <div className={style.blockIcon}>
                <img src={coins.iconUrl} alt="" />
                <h2 className={style.nameCoin}>{coins.name}</h2>

            </div>
            <div className={style.block_detailCoin}>
                <Ohlc />
                <Description
                    description={coins.description}
                    name={coins.name}
                />
                <ProjectLinks />
                <Exchanges />


            </div>


        </div>
    )
}

export default DetailCoin;