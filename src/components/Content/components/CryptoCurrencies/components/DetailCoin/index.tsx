import { useParams } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import Ohlc from "./components/Ohlc";
import TopFiveExchanges from "../../../Exchanges/components/TopFiveExchanges";
import Description from "./components/Description";
import ProjectLinks from "./components/ProjectLinks";
import { getCoin } from "requests/coins";

interface Details {
    description: string,
    name: string,
    iconUrl: string,
    uuid: string,
};

const initialState = {
    description: '',
    name: '',
    iconUrl: '',
    uuid: '',
};

const DetailCoin = () => {
    const [coins, setCoins] = useState<Details>(initialState);
    const { uuid } = useParams();

    useEffect(() => {
        getCoin(uuid).then((coins: any) => {
            setCoins(coins)
        })
    }, []);

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
                <TopFiveExchanges />
            </div>
        </div>
    )
}

export default memo(DetailCoin);