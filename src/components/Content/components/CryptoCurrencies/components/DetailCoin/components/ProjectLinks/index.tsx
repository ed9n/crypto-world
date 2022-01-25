import React, { memo, useEffect, useState } from "react";
import style from "./style.module.scss";
import LinkItem from "./components/LinkItem";
import { useParams } from "react-router-dom";
import { getLinks } from "requests/coins";

const ProjectLinks = () => {

    const [links, setLinks] = useState([]);
    const { uuid } = useParams();

    useEffect(() => {
        getLinks(uuid).then((coins: any) => {
            setLinks(coins)
        })
    }, []);

    return (
        <div className={style.block_projectLinks}>
            <h2>Project links</h2>
            <table>
                {links.map(item => (
                    <LinkItem
                        key={item.url}
                        name={item.name}
                        url={item.url}
                        type={item.type}
                    />
                ))}
            </table>
        </div>
    )
}

export default memo(ProjectLinks);