import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import axios from "axios";
import LinkItem from "./components/LinkItem";
import { useParams } from "react-router-dom";

const ProjectLinks = () => {

    const [links, setLinks] = useState([])
    const { uuid } = useParams();

    useEffect(() =>{
        const options: any = {
            method: 'GET',
            url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
            params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
            headers: {
              'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
              'x-rapidapi-key': 'ff937e0638msh9d39bafcfa4eccfp1ffc22jsn0f22119b358d'
            }
          };
          
          axios.request(options).then(function (response) {
              setLinks(response.data.data.coin.links);
          }).catch(function (error) {
              console.error(error);
          });
    
    }, [])
    return(
        <div>
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

export default ProjectLinks;