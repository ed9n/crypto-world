import React, { memo, useEffect } from "react";
import style from "./style.module.scss";

const ExchangesItem: React.FC<{
    uuid: number,
    name: string,
    iconUrl: string,
    rank: number,
    volume: string,
    price: string,
    coinrankingUrl: string,

}> = ({ name, iconUrl, rank, volume, price, coinrankingUrl }) => {

    const total24hVolume: string = volume;
    const roundNumber: number = Math.round(+total24hVolume * 10) / 10;
    function addsLetterToTheEnd() {
        if (roundNumber >= 1000000000) {
            const changeNumberToString: string = roundNumber.toString();
            const newTotal24hVolume: string = '$' + changeNumberToString.slice(0, 1) + "." + changeNumberToString.slice(1, 3) + " billion";
            return newTotal24hVolume
        } else if (roundNumber < 1000000000) {
            const changeNumberToString: string = roundNumber.toString();
            const newTotal24hVolume: string = '$' + changeNumberToString.slice(0, 3) + "." + changeNumberToString.slice(1, 3) + " million";
            return newTotal24hVolume
        }
    }

    useEffect(() => {
        addsLetterToTheEnd()
    }, [volume]);

    const newTotal24hVolume = addsLetterToTheEnd();

    const value: string = price;
    const newPrice: string = `$${Math.round(+value).toString()}`;

    return (
        <tbody className={style.block_exchangesItem}>
            <tr className={style.exchangesItem_tr}>
                <th className={style.exchangesItem_tr_th}>
                    <div className={style.exchangesItem_tr_th_block_items}>
                        <div className={style.exchangesItem_tr_th_items_rank}>
                            {rank}
                        </div>
                        <a href={coinrankingUrl}>
                            <img
                                className={style.exchangesItem_tr_th_items_block_image_img}
                                src={iconUrl}
                            />
                        </a>
                        <a
                            href={coinrankingUrl}
                            className={style.exchangesItem_tr_th_items_block_name_text}>
                            {name}
                        </a>
                    </div>
                </th>
                <td className={style.exchangesItem_tr_td}>
                    <div className={style.exchangesItem_tr_td_24hVolume}>
                        {newTotal24hVolume}
                    </div>
                    <div className={style.exchangesItem_tr_td_price}>
                        {newPrice}
                    </div>
                </td>
            </tr>
        </tbody>
    )
}

export default memo(ExchangesItem);