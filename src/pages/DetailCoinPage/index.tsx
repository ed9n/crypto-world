import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import style from "./style.module.scss";

const DetailCoinPage = () => {

    const [coins, setCoins] = useState([]);
    const { name } = useParams();

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

    const filterCoin = coins.filter(el => el.name === name)
    const descriptionCoin: string[] = filterCoin.map(item => (item.description));
    const nameCoin: string = filterCoin.map(item => (item.name)).toString();
    const iconCoin: string = filterCoin.map(item => (item.iconUrl)).toString();
    const myHTML: string = descriptionCoin.toString();
    const mySafeHTML = DOMPurify.sanitize(myHTML)

    return (
        <div className={style.description}>
            <div className={style.blockIcon}>
                <h2 className={style.nameCoin}>{nameCoin}</h2>
                <img src={iconCoin} alt="" />
            </div>
            <div 
            className={style.aboutCoin} 
            dangerouslySetInnerHTML={{ __html: mySafeHTML }}>
            </div>
        </div>
    )
}

export default DetailCoinPage