import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./style.module.scss";
import { Line } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';
import { useParams } from "react-router-dom";

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);


const Ohlc = () => {
    const { uuid } = useParams();
    const [ohlc, setOhlc] = useState([])

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/ohlc`,
            params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', interval: 'month', limit: '5' },
            headers: {
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
                'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
        };

        axios.request(options).then(function (response) {
            setOhlc(response.data.data.ohlc);
        }).catch(function (error) {
            console.error(error);
        });

    }, [])

    const data = {
        labels: ['September', 'October', 'November', 'December', 'January'],
        datasets: [
            {
                label: "High",
                data: ohlc.map(item => (item.high)),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgb(255, 13, 61)"
            },
            {
                label: "Avg",
                data: ohlc.map(item => (item.avg)),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgb(0, 156, 13)"
            },
            {
                label: "Low",
                data: ohlc.map(item => (item.low)),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgb(119, 119, 119)"
            }

        ]
    };

    return (
        <div className={style.block_convas}>
            <h3 className={style.title_convas}>
                Statistics for 5 months
            </h3>
            <Line
                data={data}
            />
        </div>
    )
}

export default Ohlc;


