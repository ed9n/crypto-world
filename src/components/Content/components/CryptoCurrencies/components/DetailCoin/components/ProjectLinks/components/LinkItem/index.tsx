import React from "react";
import style from "./style.module.scss";
import Website from "./image/Website.svg";
import Reddit from "./image/Reddit.svg";
import GitHub from "./image/GitHub.svg";
import BlockExplorer from "./image/BlockExplorer.svg";
import Bitcointalk from "./image/Bitcointalk.svg";
import Telegram from "./image/Telegram.svg";
import YouTube from "./image/YouTube.svg";
import Twitter from "./image/Twitter.svg";
import Facebook from "./image/Facebook.svg";
import Instagram from "./image/Instagram.svg";
import Discord from "./image/Discord.svg";
import Medium from "./image/Medium.svg";
import SinaWeibo from "./image/SinaWeibo.svg";
import Vkontakte from "./image/Vkontakte.svg"
import LinkedIn from "./image/LinkedIn.svg"

type MapperType = {
    [key: string]: string
}

const LinkItem: React.FC<{
    name: string,
    url: string,
    type: string

}> = ({ url, name, type }) => {

    const imagesMapper: MapperType = {
        'website': Website,
        'reddit': Reddit,
        'github': GitHub,
        'explorer': BlockExplorer,
        'bitcointalk': Bitcointalk,
        'telegram': Telegram,
        'twitter': Twitter,
        'youtube': YouTube,
        'facebook': Facebook,
        'instagram': Instagram,
        'discord': Discord,
        'medium': Medium,
        'sina-weibo': SinaWeibo,
        'vkontakte': Vkontakte,
        'linkedin': LinkedIn
    }

    return (
        <tbody>

            <tr className={style.linkItem_link_tr}>

                <td className={style.linkItem_link_td_block_img}>
                    <a className={style.linkItem_link} href={url}>
                        <img src={imagesMapper[type]} />
                    </a>
                </td>
                <th>
                    <a className={style.linkItem_link} href={url}>
                        {type}
                    </a>
                </th>
                <td className={style.linkItem_link_td}>
                    <a className={style.linkItem_link} href={url}>
                        {name}
                    </a>
                </td>

            </tr>


        </tbody>
    )
}

export default LinkItem;