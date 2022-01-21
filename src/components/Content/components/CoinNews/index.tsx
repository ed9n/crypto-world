import React, { useEffect, useState } from "react";
import News from "./components/News";
import axios from "axios";
import style from "./style.module.scss";

interface image {

}

const CoinNews = () => {

    const [news, setNews] = useState([]);
    const [test, setTest] = useState();


    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: { q: 'cryptocurrency', originalImg: 'true' },
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': '275cca037dmshd4eed979457dcf3p168054jsn19a224a60fde'
            }
        };

        axios.request(options).then(function (response) {
            setNews(response.data.value);
            console.log(response.data.value)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className={style.news}>
            <h2 className={style.title_news}>
                Latest Crypto News
            </h2>

            <div className={style.block_news}>
                {news.map(item => (
                    <News
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        url={item.url}
                        datePublished={item.datePublished}
                    />
                ))}
            </div>

        </div>
    )
}


export default CoinNews;