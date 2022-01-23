import React, { useEffect, useState } from "react";
import News from "./components/News";
import axios from "axios";
import style from "./style.module.scss";
import Input from "components/Form/Input";


const CoinNews = () => {

    const [news, setNews] = useState([]);
    const [test, setTest] = useState();
    const [value, setValue] = useState('');

    useEffect(() => {
        const options: any = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: {
                count: 10,
                q: value,
                textDecorations: 'true',
                sortBy: 'Date',
                mkt: 'en-Us',
                freshness: 'Week',
                originalImg: 'true',
                textFormat: 'Raw',
                safeSearch: 'Off'
            },
            headers: {
                'x-bingapis-sdk': 'true',
                'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
                'x-rapidapi-key': 'c191e09a3emshd920759bae088b2p1d41b5jsn4e206719d852'
            }
        };

        axios.request(options).then(function (response) {
            setNews(response.data.value);
        }).catch(function (error) {
            console.error(error);
        });
    }, [value])

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <div className={style.news}>
             <h2 className={style.title_news}>
             Breaking news for the this week
            </h2>
            <div className={style.block_input}>
                <Input onChange={onChangeHandler} placeholder={'Search News'} />
            </div>
            <div className={style.block_news}>
                {news.map(item => (
                    <News
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        url={item.url}
                        datePublished={item.datePublished}
                        key={item.name}
                    />
                ))}
            </div>
        </div>
    )
}


export default CoinNews;