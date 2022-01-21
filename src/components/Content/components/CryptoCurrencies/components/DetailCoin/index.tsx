import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import style from "./style.module.scss";

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

    const mySafeHTML = DOMPurify.sanitize(coins.description)

    return (
        <div className={style.description}>
            <div className={style.blockIcon}>
                <h2 className={style.nameCoin}>{coins.name}</h2>
                <img src={coins.iconUrl} alt="" />
            </div>
            <div
                className={style.aboutCoin}
                dangerouslySetInnerHTML={{ __html: mySafeHTML }}>
            </div>
        </div>
    )
}

export default DetailCoin;