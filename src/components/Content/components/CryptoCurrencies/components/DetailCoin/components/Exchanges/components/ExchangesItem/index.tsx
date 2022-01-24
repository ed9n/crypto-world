import React from "react";
import style from "./style.module.scss";

const ExchangesItem: React.FC<{
    uuid: number,
    name: string,
    iconUrl: string,
    rank: number,
    volume: string,
    price: string,

}> = ({ uuid, name, iconUrl, rank, volume, price }) => {


    const total24hVolume: string = volume;
    const roundNumber: number = Math.round(+total24hVolume * 10) / 10;
    const changeNumberToString: string = roundNumber.toString();
    const newTotal24hVolume: string = '$' + changeNumberToString.slice(0, 1) + "." + changeNumberToString.slice(1, 3) + "B";

    const value: string = price;
    const newPrice: string = `$${Math.round(+value).toString()}`;

    return (

        <tbody className={style.block_exchangesItem}>
            <tr className={style.exchangesItem_tr}>
                <th className={style.exchangesItem_tr_th}>
                    <div className={style.exchangesItem_tr_th_items}>
                        <div>{rank}</div>
                        <div>
                            <img className={style.img} src={iconUrl} />
                        </div>
                        <div>
                            <p>{name}</p>
                        </div>
                    </div>
                </th>
                <td>
                    <div>{newTotal24hVolume}</div>
                    <div>{newPrice}</div>
                </td>
            </tr>
        </tbody>

    )
}

export default ExchangesItem;