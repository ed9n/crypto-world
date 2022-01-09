import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Coins: React.FC<{
    id: number,
    name: string,
    price: string,
    marketCap: number,
    dailyChange: number,
    icon: string,
    rank: number 
 }> = ({ id, name, price, marketCap, dailyChange, icon, rank }) => {

    const cap = marketCap;
    const changeNumberToStringCap: string = cap.toString();
    const newMarketCap: string = changeNumberToStringCap.slice(0, 3) + "." + changeNumberToStringCap.slice(-1) + "B";

    const changePrice: number = +price;
    function roundPrice(num: number): number {
        if (num < 1) {
            const lessDollar: number = +changePrice.toPrecision(1);
            return lessDollar;
        } else if (num > 0) {
            const moreDollar: number = Math.round(num);
            return moreDollar;
        } 
    }

    return (
        <Link className={style.coinLink} to={'/Cryptocurrencies/' + name}>
            <div className={style.coin}>
                <div className={style.coin_firt_block}>
                    <div className={style.coin_name}>{rank}. {name}</div>
                    <img src={icon} alt="" />
                </div>
                <div className={style.coin_second_block}>
                    <div className={style.price}>
                        <div className={style.price_text}>Price: </div>
                        <div className={style.price_number}>${roundPrice(changePrice)}</div>
                    </div>
                    <div className={style.market}>
                        <div className={style.market_text}>Market Cap: </div>
                        <div className={style.market_number}>${newMarketCap}</div>
                    </div>
                    <div className={style.daily}>
                        <div className={style.daily_text}>Daily Change: </div>
                        <div className={style.daily_number}>{dailyChange}%</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Coins;