import React from "react";
import style from "./style.module.scss";

interface Image {
    _type?: string,
    contentUrl: string,
    thumbnail?: DetailImage,


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
    image: Image,
    url: string,
    datePublished: string
}> = ({ name, image, url, datePublished }) => {


    return (
        <a href={url} className={style.news}>
            <div className={style.block_img_title}>
                <div className={style.block_img}>
                    <img src={image.contentUrl} alt="" className={style.img} />
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