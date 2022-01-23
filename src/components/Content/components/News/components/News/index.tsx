import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import newsImg from "./img/newsImg.png"

interface Image {
    url?: string,
    contentUrl?: string



}

interface DetailImage {
    _type?: string,
    contentUrl?: string,
    width?: number,
    height?: number,
}



const News: React.FC<{
    name: string,
    description: string,
    image?: Image,
    url: string,
    datePublished: string
}> = ({ name, image, url, datePublished }) => {
    
   console.log(image)

    return (
        <a href={url} className={style.news}>
            <div className={style.block_img_title}>
                <div className={style.block_img}>
                    {image != undefined
                    ? <img src={image.contentUrl} alt=""  /> 
                    : <img src={newsImg} alt=""  /> } 
                    
                </div>
                <div className={style.block_title_news}>
                    <p className={style.title_news}>
                        {name}
                    </p>
                    <div className={style.test}>
                        <p className={style.date_published_news}>
                            {datePublished.slice(0, 10)}
                        </p>
                    </div>

                </div>
            </div>
        </a>
    )
}


export default News;