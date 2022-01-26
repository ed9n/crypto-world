import React, { memo, useEffect, useState } from "react";
import News from "./components/News";
import style from "./style.module.scss";
import Input from "../../../Form/Input";
import { getNews } from "requests/coins";

const WorldNews = () => {

    const [news, setNews] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getNews(value).then((coins: any) => {
            setNews(coins)
        })
    }, [value]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    };

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

export default memo(WorldNews);